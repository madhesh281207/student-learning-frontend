import type { Problem } from '../../../types/problem'

interface ProblemDescriptionProps {
  problem: Problem
}

function ProblemDescription({ problem }: ProblemDescriptionProps) {
  return (
    <section className="min-h-0 overflow-y-auto border-b border-gray-200 bg-white p-5 lg:border-b-0 lg:border-r">
      <div className="space-y-7">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{problem.title}</h2>
          <p className="mt-3 text-sm leading-7 text-gray-600">{problem.description}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Examples</h2>
          <div className="mt-4 space-y-4">
            {problem.examples.map((example, index) => (
              <div key={example.id ?? `${example.input}-${index}`} className="rounded-lg bg-gray-50 p-4 text-sm">
                <p className="font-medium text-gray-700">Example {index + 1}</p>
                <p className="mt-3 text-gray-600">Input: {example.input}</p>
                {example.target && <p className="mt-1 text-gray-600">Target: {example.target}</p>}
                <p className="mt-1 text-gray-600">Output: {example.expectedOutput ?? example.output}</p>
                {example.explanation && <p className="mt-3 leading-6 text-gray-500">{example.explanation}</p>}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">Constraints</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600">
            {problem.constraints.map((constraint) => <li key={constraint}>{constraint}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProblemDescription
