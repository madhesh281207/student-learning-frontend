import { useNavigate } from 'react-router-dom'

import type { Problem } from '../../../types/problem'

interface WorkspaceHeaderProps {
  problem: Problem
  language: string
  onLanguageChange: (language: string) => void
  onRun: () => void
  onSubmit: () => void
}

function WorkspaceHeader({ problem, language, onLanguageChange, onRun, onSubmit }: WorkspaceHeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4">
      <div className="flex items-center gap-4">
        <button type="button" onClick={() => navigate('/problems')} className="text-sm font-medium text-gray-600 hover:text-gray-900">
          ← Back
        </button>

        <div className="h-5 w-px bg-gray-300" />

        <div>
          <h1 className="text-sm font-semibold text-gray-900">{problem.title}</h1>
          <span className="text-xs text-gray-500">{problem.difficulty}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={language}
          onChange={(event) => onLanguageChange(event.target.value)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none"
        >
          <option value="typescript">TypeScript</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>

        <button type="button" onClick={onRun} className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Run
        </button>

        <button type="button" onClick={onSubmit} className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
          Submit
        </button>
      </div>
    </header>
  )
}

export default WorkspaceHeader
