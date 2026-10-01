import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useProblem } from '../../hooks/useProblem'
import CodeEditor from './components/CodeEditor'
import ProblemDescription from './components/ProblemDescription'
import SubmissionResult from './components/SubmissionResult'
import TestCases from './components/TestCases'
import WorkspaceHeader from './components/WorkspaceHeader'

function CodingWorkspace() {
  const { problemId } = useParams<{ problemId: string }>()
  const { problem, isLoading, error } = useProblem(problemId)

  const [language, setLanguage] = useState('typescript')
  const [selectedTestCase, setSelectedTestCase] = useState(1)
  const [status, setStatus] = useState<'idle' | 'running' | 'accepted' | 'wrong' | 'error'>('idle')

  if (isLoading) {
    return <p className="text-sm text-gray-500">Loading workspace...</p>
  }

  if (error || !problem) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h1 className="font-semibold text-red-800">Problem not found</h1>
        <p className="mt-1 text-sm text-red-700">{error ?? 'The requested problem could not be found.'}</p>
        <Link to="/problems" className="mt-4 inline-block text-sm font-medium text-red-800 underline">
          Back to Problems
        </Link>
      </div>
    )
  }

  const handleRun = () => {
    setStatus('running')

    setTimeout(() => {
      setStatus('accepted')
    }, 1000)
  }

  const handleSubmit = () => {
    setStatus('running')

    setTimeout(() => {
      setStatus('accepted')
    }, 1000)
  }

  return (
    <div className="-m-4 flex h-[calc(100vh-5rem)] min-h-[640px] flex-col overflow-hidden border border-gray-200 bg-gray-100 sm:-m-6">
      <WorkspaceHeader
        problem={problem}
        language={language}
        onLanguageChange={setLanguage}
        onRun={handleRun}
        onSubmit={handleSubmit}
      />

      <main className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[minmax(280px,38%)_minmax(0,1fr)]">
        <div className="min-h-0 border-r border-gray-200">
          <ProblemDescription problem={problem} />
        </div>

        <div className="grid min-h-0 grid-rows-[1fr_280px]">
          <div className="min-h-0">
            <CodeEditor key={problem.id} problem={problem} />
          </div>

          <div className="grid min-h-0 grid-cols-2 border-t border-gray-200 bg-white">
            <div className="border-r border-gray-200">
              <TestCases
                testCases={problem.examples.map((example, index) => ({
                  id: example.id ?? index + 1,
                  input: example.input,
                  expectedOutput: example.expectedOutput ?? example.output ?? '',
                }))}
                selectedTestCase={selectedTestCase}
                onSelectTestCase={setSelectedTestCase}
              />
            </div>

            <SubmissionResult status={status} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default CodingWorkspace
