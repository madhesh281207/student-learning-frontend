interface LoadingStateProps {
  message?: string
}

function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  )
}

export default LoadingState
