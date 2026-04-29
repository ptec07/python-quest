import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PracticeWorkspace } from '../components/PracticeWorkspace'
import { getExercisesForLesson } from '../content/exercises'
import { getLessonBySlug } from '../content/lessons'
import { useProgress } from '../features/progress/useProgress'

export function PracticePage() {
  const { lessonSlug } = useParams()
  const lesson = lessonSlug ? getLessonBySlug(lessonSlug) : undefined
  const { progress, completeExercise } = useProgress()
  const [selectedExerciseId, setSelectedExerciseId] = useState<string | undefined>()

  if (!lesson) {
    return (
      <div className="page">
        <h1>퀘스트를 찾을 수 없습니다</h1>
        <Link to="/quests">Quest Map으로 돌아가기</Link>
      </div>
    )
  }

  const exercises = getExercisesForLesson(lesson.id)
  const exercise = exercises.find((candidate) => candidate.id === selectedExerciseId) ?? exercises[0]

  if (!exercise) {
    return (
      <div className="page">
        <h1>실습이 아직 준비되지 않았습니다</h1>
        <Link to={`/quest/${lesson.slug}`}>단원으로 돌아가기</Link>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-heading">
        <p className="eyebrow">{lesson.title}</p>
        <h1>코드 실습</h1>
        <p>Python 코드를 읽고 고치며 공식 문서의 개념을 몸으로 익힙니다.</p>
      </div>
      {exercises.length > 1 && (
        <section className="panel practice-selector" aria-label="실습 선택">
          <div>
            <p className="eyebrow">Practice Set</p>
            <h2>실습 선택</h2>
            <p>이 단원의 여러 실습을 골라서 풀 수 있습니다.</p>
          </div>
          <div className="practice-selector-grid">
            {exercises.map((candidate, index) => {
              const isSelected = candidate.id === exercise.id
              const isCompleted = progress.completedExerciseIds.includes(candidate.id)
              return (
                <button
                  key={candidate.id}
                  type="button"
                  className={isSelected ? 'selected exercise-tab' : 'exercise-tab'}
                  onClick={() => setSelectedExerciseId(candidate.id)}
                  aria-pressed={isSelected}
                >
                  <span>{index + 1}. {candidate.title}</span>
                  {isCompleted && <small>완료됨</small>}
                </button>
              )
            })}
          </div>
        </section>
      )}
      <PracticeWorkspace
        key={exercise.id}
        exercise={exercise}
        completed={progress.completedExerciseIds.includes(exercise.id)}
        onComplete={completeExercise}
      />
    </div>
  )
}
