export type MockExecutionStatus = 'idle' | 'running' | 'accepted' | 'wrong' | 'error'

export interface MockExecutionResult {
  status: MockExecutionStatus
  message: string
}

export async function runMockExecution(): Promise<MockExecutionResult> {
  return Promise.resolve({
    status: 'accepted',
    message: 'All test cases passed.',
  })
}

export async function submitMockExecution(): Promise<MockExecutionResult> {
  return Promise.resolve({
    status: 'accepted',
    message: 'Accepted. All test cases passed.',
  })
}
