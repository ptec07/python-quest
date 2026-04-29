import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import App from './App'

beforeEach(() => {
  window.history.pushState({}, '', '/')
  localStorage.clear()
})

describe('Python Quest MVP', () => {
  it('renders a Korean Python Quest home based on the official Python docs', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /Python Quest/i })).toBeInTheDocument()
    expect(screen.getByText(/docs\.python\.org\/ko\/3 공식 문서/i)).toBeInTheDocument()
    expect(screen.getByText(/읽고, 실행하고, 고치면서 Python을 배운다/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /퀘스트 맵 보기/i })).toHaveAttribute('href', '/quests')
    expect(screen.getByRole('link', { name: /공식 문서 열기/i })).toHaveAttribute('href', 'https://docs.python.org/ko/3/')
  })

  it('shows a course map aligned with Python tutorial sections', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: /퀘스트 맵 보기/i }))

    expect(screen.getByRole('heading', { name: /Quest Map/i })).toBeInTheDocument()
    expect(screen.getByText('파이썬 자습서')).toBeInTheDocument()
    expect(screen.getByText('자료 구조와 함수')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /숫자와 텍스트 퀘스트 열기/i })).toHaveAttribute(
      'href',
      '/quest/numbers-and-text',
    )
  })

  it('opens a lesson with objectives, official docs, quiz, and practice CTA', () => {
    window.history.pushState({}, '', '/quest/control-flow')
    render(<App />)

    expect(screen.getByRole('heading', { name: /제어 흐름: if와 for/i })).toBeInTheDocument()
    expect(screen.getByText(/if, for, range의 역할을 설명할 수 있다/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /4\. 기타 제어 흐름 도구/i })).toHaveAttribute(
      'href',
      'https://docs.python.org/ko/3/tutorial/controlflow.html',
    )
    expect(screen.getByText(/range\(\)는 무엇을 만들까/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /실습 시작하기/i })).toHaveAttribute('href', '/quest/control-flow/practice')
  })

  it('checks a quiz answer and persists quiz progress', async () => {
    const user = userEvent.setup()
    window.history.pushState({}, '', '/quest/control-flow')
    render(<App />)

    const quiz = screen.getByTestId('quiz-control-flow-range')
    await user.click(within(quiz).getByRole('button', { name: /연속된 정수 시퀀스/i }))

    expect(within(quiz).getByText(/정답/i)).toBeInTheDocument()
    expect(within(quiz).getByText(/range는 반복에 사용할 정수들을 생성/i)).toBeInTheDocument()
    expect(localStorage.getItem('python-quest-progress')).toContain('control-flow-range')
  })

  it('renders the selected Python practice and never falls back to a placeholder', () => {
    window.history.pushState({}, '', '/quest/data-structures/practice')
    render(<App />)

    expect(screen.getAllByText(/리스트 메서드로 할 일 정리하기/i).length).toBeGreaterThan(0)
    const editor = screen.getByLabelText(/실습 코드/i) as HTMLTextAreaElement
    expect(editor.value).toContain('tasks.append')
    expect(screen.queryByText(/Hello world/i)).not.toBeInTheDocument()
  })

  it('lets learners switch between multiple practice exercises for a lesson', async () => {
    const user = userEvent.setup()
    window.history.pushState({}, '', '/quest/classes/practice')
    render(<App />)

    expect(screen.getByRole('heading', { name: /Quest 클래스로 상태 묶기/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /인스턴스 메서드로 완료 처리하기/i }))

    expect(screen.getAllByText(/인스턴스 메서드로 완료 처리하기/i).length).toBeGreaterThan(0)
    const editor = screen.getByLabelText(/실습 코드/i) as HTMLTextAreaElement
    expect(editor.value).toContain('quest.complete()')
    expect(editor.value).not.toContain('print(quest.title, quest.completed)')
  })

  it('reveals hints, shows the solution, resets code, and marks practice complete', async () => {
    const user = userEvent.setup()
    window.history.pushState({}, '', '/quest/functions/practice')
    render(<App />)

    const editor = screen.getByLabelText(/실습 코드/i) as HTMLTextAreaElement
    expect(editor.value).toContain('def greet')

    await user.click(screen.getByRole('button', { name: /힌트 보기/i }))
    expect(screen.getByText(/def 문은 함수 이름과 매개변수 목록을 만든다/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /정답 보기/i }))
    expect(editor.value).toContain('return f"안녕하세요, {name}!"')

    await user.click(screen.getByRole('button', { name: /초기화/i }))
    expect(editor.value).not.toContain('return f"안녕하세요, {name}!"')

    await user.click(screen.getByRole('button', { name: /실습 완료/i }))
    expect(localStorage.getItem('python-quest-progress')).toContain('write-greet-function')
    expect(screen.getByText(/완료됨 — progress에 저장되었습니다/i)).toBeInTheDocument()
  })

  it('uses saved progress for home percentage and the continue recommendation', () => {
    localStorage.setItem(
      'python-quest-progress',
      JSON.stringify({
        completedLessonIds: ['getting-started', 'numbers-and-text'],
        completedExerciseIds: [],
        completedQuizIds: [],
        lastOpenedLessonId: 'control-flow',
      }),
    )

    render(<App />)

    expect(screen.getByText('22%')).toBeInTheDocument()
    expect(screen.getByLabelText('진행률 22%')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /이어서 학습하기/i })).toHaveAttribute('href', '/quest/control-flow')
  })

  it('shows a recovery link for an unknown route', () => {
    window.history.pushState({}, '', '/quest/not-real')
    render(<App />)

    expect(screen.getByRole('heading', { name: /퀘스트를 찾을 수 없습니다/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Quest Map으로 돌아가기/i })).toHaveAttribute('href', '/quests')
  })

  it('exports and imports progress backup without requiring login', async () => {
    const user = userEvent.setup()
    localStorage.setItem(
      'python-quest-progress',
      JSON.stringify({
        completedLessonIds: ['functions'],
        completedExerciseIds: ['write-greet-function'],
        completedQuizIds: ['functions-return'],
        lastOpenedLessonId: 'classes',
      }),
    )

    render(<App />)

    expect(screen.queryByText(/로그인/i)).not.toBeInTheDocument()
    const exportBox = screen.getByLabelText(/진행률 백업 데이터/i) as HTMLTextAreaElement
    expect(exportBox.value).toContain('write-greet-function')

    const importPayload = JSON.stringify({
      completedLessonIds: ['io-files'],
      completedExerciseIds: ['write-text-file'],
      completedQuizIds: ['io-files-with'],
      lastOpenedLessonId: 'io-files',
    })
    fireEvent.change(screen.getByLabelText(/백업 데이터 붙여넣기/i), { target: { value: importPayload } })
    await user.click(screen.getByRole('button', { name: /백업 불러오기/i }))

    expect(localStorage.getItem('python-quest-progress')).toContain('write-text-file')
    expect(screen.getByText(/백업을 불러왔습니다/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /이어서 학습하기/i })).toHaveAttribute('href', '/quest/io-files')
  })
})
