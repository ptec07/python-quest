import { useCallback, useEffect, useState } from 'react'
import {
  addCompletedExercise,
  addCompletedLesson,
  addCompletedQuiz,
  normalizeProgress,
  readProgress,
  setLastOpenedLesson,
  type Progress,
  writeProgress,
} from './progress'

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => readProgress())

  useEffect(() => {
    writeProgress(progress)
  }, [progress])

  const replaceProgress = useCallback((nextProgress: Progress) => {
    setProgress(normalizeProgress(nextProgress))
  }, [])

  const completeQuiz = useCallback((quizId: string) => {
    setProgress((current) => addCompletedQuiz(current, quizId))
  }, [])

  const completeExercise = useCallback((exerciseId: string) => {
    setProgress((current) => addCompletedExercise(current, exerciseId))
  }, [])

  const completeLesson = useCallback((lessonId: string) => {
    setProgress((current) => addCompletedLesson(current, lessonId))
  }, [])

  const openLesson = useCallback((lessonId: string) => {
    setProgress((current) => setLastOpenedLesson(current, lessonId))
  }, [])

  return { progress, replaceProgress, completeQuiz, completeExercise, completeLesson, openLesson }
}
