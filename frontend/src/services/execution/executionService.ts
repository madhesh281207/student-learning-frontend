import { runMockExecution, submitMockExecution, type MockExecutionResult } from './mockExecutionService'

export interface ExecuteCodeRequest {
  problemId: string
  language: string
  sourceCode: string
  testCaseIds?: string[]
}

export interface ExecutionResult {
  status: 'accepted' | 'wrong_answer' | 'runtime_error' | 'compilation_error'
  runtime?: number
  memory?: number
  message: string
}

export interface ExecutionService {
  runCode(request: ExecuteCodeRequest): Promise<ExecutionResult>
  submitCode(request: ExecuteCodeRequest): Promise<ExecutionResult>
}

export const executionService: ExecutionService = {
  async runCode(_request: ExecuteCodeRequest): Promise<ExecutionResult> {
    const result: MockExecutionResult = await runMockExecution()
    return {
      status: result.status === 'accepted' ? 'accepted' : 'wrong_answer',
      message: result.message,
      runtime: 42,
      memory: 64,
    }
  },

  async submitCode(_request: ExecuteCodeRequest): Promise<ExecutionResult> {
    const result: MockExecutionResult = await submitMockExecution()
    return {
      status: result.status === 'accepted' ? 'accepted' : 'wrong_answer',
      message: result.message,
      runtime: 42,
      memory: 64,
    }
  },
}

export default executionService
