import type { Problem } from '../../types/problem'

interface ProblemStatementProps {
  problem: Problem
}

function ProblemStatement({ problem }: ProblemStatementProps) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-semibold text-gray-900">Description</h2>
        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600">{problem.description}</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900">Input</h2>
        <p className="mt-3 text-sm leading-7 text-gray-600">{problem.inputFormat}</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900">Output</h2>
        <p className="mt-3 text-sm leading-7 text-gray-600">{problem.outputFormat}</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold text-gray-900">Constraints</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-600">
          {problem.constraints.map((constraint, index) => {
            const value = typeof constraint === 'string' ? constraint : constraint.text
            const key = typeof constraint === 'string' ? `${value}-${index}` : constraint.id
            return <li key={key}>{value}</li>
          })}
        </ul>
      </section>
    </div>
  )
}

export default ProblemStatement
