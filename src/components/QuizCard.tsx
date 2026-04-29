import { useState } from 'react'
import type { Quiz } from '../types'

type QuizCardProps = {
  quiz: Quiz
  onComplete: (quizId: string) => void
}

export function QuizCard({ quiz, onComplete }: QuizCardProps) {
  const [selected, setSelected] = useState<string>()
  const isCorrect = selected === quiz.answer

  function choose(choice: string) {
    setSelected(choice)
    if (choice === quiz.answer) onComplete(quiz.id)
  }

  return (
    <article className="quiz-card" data-testid={`quiz-${quiz.id}`}>
      <p className="eyebrow">Quiz</p>
      <h3>{quiz.question}</h3>
      <div className="choice-grid">
        {quiz.choices.map((choice) => (
          <button key={choice} type="button" onClick={() => choose(choice)} className={selected === choice ? 'selected' : ''}>
            {choice}
          </button>
        ))}
      </div>
      {selected && (
        <div className={isCorrect ? 'feedback success' : 'feedback error'}>
          <strong>{isCorrect ? '정답' : '다시 생각해보세요'}</strong>
          <p>{isCorrect ? quiz.explanation : `힌트: ${quiz.answer}`}</p>
        </div>
      )}
    </article>
  )
}
