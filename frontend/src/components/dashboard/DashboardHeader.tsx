interface DashboardHeaderProps {
  studentName: string
}

function DashboardHeader({ studentName }: DashboardHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Good morning, {studentName}
      </h1>

      <p className="mt-1 text-sm text-gray-500 sm:text-base">
        Continue your coding preparation and track your progress.
      </p>
    </div>
  )
}

export default DashboardHeader
