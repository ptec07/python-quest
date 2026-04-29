export const STORAGE_KEY = 'python-quest-progress'

export type Progress = {
  completedLessonIds: string[]
  completedExerciseIds: string[]
  completedQuizIds: string[]
  lastOpenedLessonId?: string
}

export const emptyProgress: Progress = {
  completedLessonIds: [],
  completedExerciseIds: [],
  completedQuizIds: [],
}

function unique(values: string[]) {
  return Array.from(new Set(values))
}

function cleanStringArray(value: unknown) {
  return Array.isArray(value) ? unique(value.filter((item): item is string => typeof item === 'string')) : []
}

export function normalizeProgress(value: unknown): Progress {
  const parsed = typeof value === 'object' && value !== null ? (value as Partial<Progress>) : {}
  const normalized: Progress = {
    completedLessonIds: cleanStringArray(parsed.completedLessonIds),
    completedExerciseIds: cleanStringArray(parsed.completedExerciseIds),
    completedQuizIds: cleanStringArray(parsed.completedQuizIds),
  }

  if (typeof parsed.lastOpenedLessonId === 'string') {
    normalized.lastOpenedLessonId = parsed.lastOpenedLessonId
  }

  return normalized
}

export function readProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return emptyProgress
    return normalizeProgress(JSON.parse(raw))
  } catch {
    return emptyProgress
  }
}

export function writeProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalizeProgress(progress)))
}

export function serializeProgressBackup(progress: Progress) {
  return JSON.stringify(normalizeProgress(progress), null, 2)
}

export function parseProgressBackup(raw: string): Progress | undefined {
  try {
    return normalizeProgress(JSON.parse(raw))
  } catch {
    return undefined
  }
}

export function addCompletedQuiz(progress: Progress, quizId: string): Progress {
  return { ...progress, completedQuizIds: unique([...progress.completedQuizIds, quizId]) }
}

export function addCompletedExercise(progress: Progress, exerciseId: string): Progress {
  return { ...progress, completedExerciseIds: unique([...progress.completedExerciseIds, exerciseId]) }
}

export function addCompletedLesson(progress: Progress, lessonId: string): Progress {
  return { ...progress, completedLessonIds: unique([...progress.completedLessonIds, lessonId]) }
}

export function setLastOpenedLesson(progress: Progress, lessonId: string): Progress {
  return { ...progress, lastOpenedLessonId: lessonId }
}

export function calculateProgressPercent(progress: Progress, totalLessons: number) {
  if (totalLessons === 0) return 0
  return Math.round((progress.completedLessonIds.length / totalLessons) * 100)
}
