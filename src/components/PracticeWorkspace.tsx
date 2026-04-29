import { useState } from 'react'
import type { Exercise } from '../types'

type PracticeWorkspaceProps = {
  exercise: Exercise
  completed: boolean
  onComplete: (exerciseId: string) => void
}

export function PracticeWorkspace({ exercise, completed, onComplete }: PracticeWorkspaceProps) {
  const [code, setCode] = useState(exercise.starterCode)
  const [hintCount, setHintCount] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)

  function showSolution() {
    setCode(exercise.solutionCode)
    setShowExplanation(true)
  }

  return (
    <section className="practice-workspace">
      <div className="practice-copy">
        <p className="eyebrow">Practice</p>
        <h2>{exercise.title}</h2>
        <p>{exercise.prompt}</p>
        <div className="practice-actions">
          <button type="button" onClick={() => setHintCount((count) => Math.min(count + 1, exercise.hints.length))}>
            힌트 보기
          </button>
          <button type="button" onClick={showSolution}>
            정답 보기
          </button>
          <button type="button" onClick={() => { setCode(exercise.starterCode); setShowExplanation(false); setHintCount(0) }}>
            초기화
          </button>
          <button type="button" className="primary-button" onClick={() => onComplete(exercise.id)}>
            실습 완료
          </button>
        </div>
        {completed && <p className="feedback success">완료됨 — progress에 저장되었습니다.</p>}
        {hintCount > 0 && (
          <ol className="hint-list">
            {exercise.hints.slice(0, hintCount).map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ol>
        )}
        {showExplanation && <p className="feedback">{exercise.explanation}</p>}
        <ul className="check-list">
          {exercise.checks.map((check) => (
            <li key={check}>{code.includes(check) ? '✓' : '○'} {check}</li>
          ))}
        </ul>
      </div>
      <label className="editor-label">
        실습 코드
        <textarea value={code} onChange={(event) => setCode(event.target.value)} spellCheck={false} />
      </label>
    </section>
  )
}
