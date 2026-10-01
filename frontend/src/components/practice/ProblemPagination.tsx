interface ProblemPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function ProblemPagination({ currentPage, totalPages, onPageChange }: ProblemPaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Problem pagination">
      <button type="button" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40">Previous</button>
      {pages.map((page) => <button key={page} type="button" onClick={() => onPageChange(page)} className={`h-10 min-w-10 rounded-lg border px-3 text-sm font-medium ${page === currentPage ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'}`} aria-current={page === currentPage ? 'page' : undefined}>{page}</button>)}
      <button type="button" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40">Next</button>
    </nav>
  )
}

export default ProblemPagination