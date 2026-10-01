import { useState } from 'react'

import type { Problem } from '../../../types/problem'

interface CodeEditorProps {
  problem: Problem
}

function CodeEditor({ problem }: CodeEditorProps) {
  const starterCode = problem.starterCode ?? `function solution() {\n  // Write your solution here\n}`
  const [code, setCode] = useState(starterCode)

  return (
    <section className="flex min-h-0 flex-1 flex-col bg-gray-950">
      <div className="flex h-12 shrink-0 items-center border-b border-gray-800 px-4">
        <span className="text-sm font-medium text-gray-300">TypeScript</span>
      </div>
      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        spellCheck={false}
        aria-label="Code editor"
        className="min-h-80 flex-1 resize-none bg-gray-950 p-4 font-mono text-sm leading-6 text-gray-100 outline-none"
      />
    </section>
  )
}

export default CodeEditor
