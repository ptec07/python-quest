import { beforeEach, describe, expect, it } from 'vitest'
import {
  addCompletedExercise,
  addCompletedQuiz,
  emptyProgress,
  readProgress,
  setLastOpenedLesson,
  STORAGE_KEY,
  writeProgress,
  calculateProgressPercent,
  parseProgressBackup,
  serializeProgressBackup,
} from './features/progress/progress'

beforeEach(() => {
  localStorage.clear()
})

describe('Python Quest progress helpers', () => {
  it('falls back to empty progress for malformed storage', () => {
    localStorage.setItem(STORAGE_KEY, 'not-json')
    expect(readProgress()).toEqual(emptyProgress)
  })

  it('normalizes partial storage, deduplicates completions, and calculates percent', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ completedLessonIds: ['getting-started'], completedQuizIds: 'bad', lastOpenedLessonId: 'functions' }),
    )

    const progress = readProgress()
    const updated = addCompletedExercise(addCompletedQuiz(progress, 'q1'), 'ex1')
    const reopened = setLastOpenedLesson(updated, 'data-structures')
    writeProgress(reopened)

    expect(readProgress()).toMatchObject({
      completedLessonIds: ['getting-started'],
      completedQuizIds: ['q1'],
      completedExerciseIds: ['ex1'],
      lastOpenedLessonId: 'data-structures',
    })
    expect(calculateProgressPercent({ ...emptyProgress, completedLessonIds: ['a', 'b'] }, 6)).toBe(33)
    expect(calculateProgressPercent(emptyProgress, 0)).toBe(0)
  })

  it('serializes and parses portable progress backups defensively', () => {
    const backup = serializeProgressBackup({
      ...emptyProgress,
      completedLessonIds: ['functions'],
      completedExerciseIds: ['write-greet-function'],
      completedQuizIds: ['functions-return'],
      lastOpenedLessonId: 'classes',
    })

    expect(backup).toContain('write-greet-function')
    expect(parseProgressBackup(backup)).toMatchObject({
      completedLessonIds: ['functions'],
      completedExerciseIds: ['write-greet-function'],
      completedQuizIds: ['functions-return'],
      lastOpenedLessonId: 'classes',
    })
    expect(parseProgressBackup('{not-json')).toBeUndefined()
    expect(
      parseProgressBackup(
        JSON.stringify({ completedLessonIds: ['a', 'a', 3], completedExerciseIds: 'bad', lastOpenedLessonId: 99 }),
      ),
    ).toEqual({ completedLessonIds: ['a'], completedExerciseIds: [], completedQuizIds: [] })
  })
})
