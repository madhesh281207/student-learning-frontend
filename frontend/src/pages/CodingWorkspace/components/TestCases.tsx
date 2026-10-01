import type { TestCase } from '../../../types/problem'

interface TestCasesProps {
  testCases: TestCase[]
  selectedTestCase: number
  onSelectTestCase: (id: number) => void
}

function TestCases({ testCases, selectedTestCase, onSelectTestCase }: TestCasesProps) {
  const selected = testCases.find((testCase) => testCase.id === selectedTestCase)

  return (
    <section className="h-full">
      <div className="flex border-b border-gray-200">
        <button type="button" className="border-b-2 border-gray-900 px-4 py-3 text-sm font-medium text-gray-900">
          Test Cases
        </button>
        <button type="button" className="px-4 py-3 text-sm text-gray-500">
          Custom Input
        </button>
      </div>

      <div className="flex gap-2 border-b border-gray-200 p-3">
        {testCases.map((testCase) => (
          <button
            key={testCase.id}
            type="button"
            onClick={() => onSelectTestCase(testCase.id ?? 1)}
            className={`rounded-md px-3 py-2 text-sm ${selectedTestCase === (testCase.id ?? 1) ? 'border border-gray-300 bg-gray-100' : 'text-gray-500'}`}
          >
            Case {testCase.id}
          </button>
        ))}
      </div>

      {selected && (
        <div className="space-y-4 p-4">
          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">Input</p>
            <pre className="rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">{selected.input}</pre>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-gray-700">Expected Output</p>
            <pre className="rounded-md border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">{selected.expectedOutput ?? selected.output ?? ''}</pre>
          </div>
        </div>
      )}
    </section>
  )
}

export default TestCases
