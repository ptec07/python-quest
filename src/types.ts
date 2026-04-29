export type OfficialDoc = {
  title: string
  url: string
}

export type Lesson = {
  id: string
  slug: string
  title: string
  section: string
  order: number
  estimatedMinutes: number
  summary: string
  objectives: string[]
  body: string[]
  officialDocs: OfficialDoc[]
}

export type Quiz = {
  id: string
  lessonId: string
  question: string
  choices: string[]
  answer: string
  explanation: string
}

export type Exercise = {
  id: string
  lessonId: string
  title: string
  prompt: string
  starterCode: string
  solutionCode: string
  hints: string[]
  checks: string[]
  explanation: string
}
