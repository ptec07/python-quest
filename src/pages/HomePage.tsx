import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProgressBar } from '../components/ProgressBar'
import { lessons, getLessonById } from '../content/lessons'
import { calculateProgressPercent, parseProgressBackup, serializeProgressBackup } from '../features/progress/progress'
import { useProgress } from '../features/progress/useProgress'

export function HomePage() {
  const { progress, replaceProgress } = useProgress()
  const [backupInput, setBackupInput] = useState('')
  const [backupMessage, setBackupMessage] = useState('')
  const percent = calculateProgressPercent(progress, lessons.length)
  const nextLesson = progress.lastOpenedLessonId
    ? getLessonById(progress.lastOpenedLessonId) ?? lessons.find((lesson) => !progress.completedLessonIds.includes(lesson.id)) ?? lessons[0]
    : lessons.find((lesson) => !progress.completedLessonIds.includes(lesson.id)) ?? lessons[0]
  const backupText = serializeProgressBackup(progress)

  function importBackup() {
    const parsed = parseProgressBackup(backupInput)
    if (!parsed) {
      setBackupMessage('백업 JSON을 읽을 수 없습니다. 내용을 확인하세요.')
      return
    }

    replaceProgress(parsed)
    setBackupInput('')
    setBackupMessage('백업을 불러왔습니다.')
  }

  return (
    <div className="page home-page">
      <section className="hero-card">
        <p className="eyebrow">docs.python.org/ko/3 공식 문서 기반</p>
        <h1>Python Quest</h1>
        <p className="hero-copy">읽고, 실행하고, 고치면서 Python을 배운다.</p>
        <p>
          Python 3 한국어 공식 문서의 자습서, 자료 구조, 모듈 장을 퀘스트형 학습 흐름으로 재구성한 TypeScript 웹앱입니다.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/quests">퀘스트 맵 보기</Link>
          <Link className="secondary-button" to={`/quest/${nextLesson.slug}`}>이어서 학습하기</Link>
          <a className="secondary-button" href="https://docs.python.org/ko/3/" target="_blank" rel="noreferrer">공식 문서 열기</a>
        </div>
      </section>
      <section className="panel">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Progress</p>
            <h2>나의 진행률</h2>
          </div>
          <strong>{percent}%</strong>
        </div>
        <ProgressBar value={percent} />
        <p>다음 추천 퀘스트: {nextLesson.title}</p>
      </section>
      <section className="panel backup-panel">
        <div>
          <p className="eyebrow">Backup</p>
          <h2>진행률 백업/복원</h2>
          <p>JSON으로 현재 브라우저의 진행률을 다른 기기에 옮길 수 있습니다.</p>
        </div>
        <label className="field-label" htmlFor="progress-backup-export">진행률 백업 데이터</label>
        <textarea id="progress-backup-export" className="code-editor backup-editor" readOnly value={backupText} />
        <label className="field-label" htmlFor="progress-backup-import">백업 데이터 붙여넣기</label>
        <textarea
          id="progress-backup-import"
          className="code-editor backup-editor"
          value={backupInput}
          onChange={(event) => setBackupInput(event.target.value)}
          placeholder="여기에 백업 JSON을 붙여넣으세요"
        />
        <button className="primary-button inline-button" type="button" onClick={importBackup}>백업 불러오기</button>
        {backupMessage && <p className="status-message">{backupMessage}</p>}
      </section>
    </div>
  )
}
