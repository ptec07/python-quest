import { LessonCard } from '../components/LessonCard'
import { lessonsBySection } from '../content/lessons'
import { useProgress } from '../features/progress/useProgress'

export function QuestMapPage() {
  const groups = lessonsBySection()
  const { progress } = useProgress()

  return (
    <div className="page">
      <div className="page-heading">
        <p className="eyebrow">Python Quest</p>
        <h1>Quest Map</h1>
        <p>Python 공식 문서의 자습서 흐름을 작은 퀘스트로 따라갑니다.</p>
      </div>
      {Object.entries(groups).map(([section, sectionLessons]) => (
        <section className="course-section" key={section}>
          <h2>{section}</h2>
          <div className="lesson-grid">
            {sectionLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} completed={progress.completedLessonIds.includes(lesson.id)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
