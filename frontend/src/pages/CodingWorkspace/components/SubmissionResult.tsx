interface SubmissionResultProps {
  status: 'idle' | 'running' | 'accepted' | 'wrong' | 'error'
}

function SubmissionResult({ status }: SubmissionResultProps) {
  if (status === 'idle') {
    return <div className="p-4 text-sm text-gray-500">Run your code to see the results.</div>
  }

  if (status === 'running') {
    return <div className="p-4 text-sm text-gray-700">Running test cases...</div>
  }

  if (status === 'accepted') {
    return (
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">Accepted</h3>
        <p className="mt-1 text-sm text-gray-600">All test cases passed.</p>
      </div>
    )
  }

  if (status === 'wrong') {
    return (
      <div className="p-4">
        <h3 className="font-semibold text-gray-900">Wrong Answer</h3>
        <p className="mt-1 text-sm text-gray-600">One or more test cases failed.</p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h3 className="font-semibold text-gray-900">Execution Error</h3>
      <p className="mt-1 text-sm text-gray-600">Something went wrong while executing the code.</p>
    </div>
  )
}

export default SubmissionResult
