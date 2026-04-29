import { describe, expect, it } from 'vitest'
import { exercises, getExercisesForLesson } from './content/exercises'
import { lessons } from './content/lessons'
import { getQuizzesForLesson, quizzes } from './content/quizzes'

describe('Python docs aligned content', () => {
  it('provides curated Korean lessons with official docs links', () => {
    expect(lessons.length).toBeGreaterThanOrEqual(9)

    for (const lesson of lessons) {
      expect(lesson.officialDocs.length, `${lesson.id} docs`).toBeGreaterThan(0)
      expect(lesson.officialDocs[0].url).toMatch(/^https:\/\/docs\.python\.org\/ko\/3\//)
      expect(lesson.objectives.length, `${lesson.id} objectives`).toBeGreaterThanOrEqual(2)
    }
  })

  it('provides route-specific exercises for every lesson', () => {
    const ids = new Set<string>()

    for (const exercise of exercises) {
      expect(ids.has(exercise.id), `${exercise.id} should be unique`).toBe(false)
      ids.add(exercise.id)
      expect(exercise.starterCode).not.toMatch(/Hello world/i)
      expect(exercise.solutionCode).not.toMatch(/Hello world/i)
      expect(exercise.starterCode).not.toBe(exercise.solutionCode)
      expect(exercise.hints.length).toBeGreaterThanOrEqual(2)
      expect(exercise.checks.length).toBeGreaterThanOrEqual(1)
    }

    for (const lesson of lessons) {
      const lessonExercises = getExercisesForLesson(lesson.id)
      expect(lessonExercises.length, `${lesson.id} exercises`).toBeGreaterThanOrEqual(2)
    }
  })

  it('provides at least one quiz for every lesson and keeps quiz ids unique', () => {
    const quizIds = new Set<string>()

    for (const quiz of quizzes) {
      expect(quizIds.has(quiz.id), `${quiz.id} should be unique`).toBe(false)
      quizIds.add(quiz.id)
      expect(quiz.choices).toContain(quiz.answer)
      expect(quiz.explanation.length).toBeGreaterThan(10)
    }

    for (const lesson of lessons) {
      expect(getQuizzesForLesson(lesson.id).length, `${lesson.id} quizzes`).toBeGreaterThanOrEqual(1)
    }
  })
})
