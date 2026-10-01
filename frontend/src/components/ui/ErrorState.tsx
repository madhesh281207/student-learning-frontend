interface ErrorStateProps {
  message: string
}

function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-5">
      <p className="text-sm text-red-700">{message}</p>
    </div>
  )
}

export default ErrorState
