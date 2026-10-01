export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: unknown
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

function buildUrl(path: string): string {
  return `${API_BASE_URL}${path}`
}

async function parseResponse<T>(response: Response): Promise<T> {
  const text = await response.text()

  if (!text) {
    return undefined as T
  }

  try {
    return JSON.parse(text) as T
  } catch {
    return text as T
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const payload = await parseResponse<unknown>(response)
    const errorMessage = typeof payload === 'string' ? payload : 'Request failed.'
    throw new Error(errorMessage)
  }

  return parseResponse<T>(response)
}

export const apiClient = {
  async request<T>(path: string, method: HttpMethod, options: RequestOptions = {}): Promise<T> {
    const { body, headers, ...rest } = options

    const response = await fetch(buildUrl(path), {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(headers ?? {}),
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      ...rest,
    })

    return handleResponse<T>(response)
  },

  get<T>(path: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, 'GET', options)
  },

  post<T>(path: string, body?: unknown, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, 'POST', { ...options, body })
  },

  put<T>(path: string, body?: unknown, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, 'PUT', { ...options, body })
  },

  delete<T>(path: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, 'DELETE', options)
  },
}

export default apiClient
