import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="page">
      <h1>퀘스트를 찾을 수 없습니다</h1>
      <p>요청한 경로에 맞는 Python Quest가 없습니다.</p>
      <Link to="/quests">Quest Map으로 돌아가기</Link>
    </div>
  )
}
