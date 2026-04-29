import type { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 'getting-started',
    slug: 'getting-started',
    title: '파이썬 시작하기',
    section: '파이썬 자습서',
    order: 1,
    estimatedMinutes: 10,
    summary: '공식 문서의 자습서 안내와 인터프리터 사용 흐름을 익힙니다.',
    objectives: ['Python 공식 문서의 큰 구조를 설명할 수 있다.', '대화형 인터프리터가 학습에 왜 유용한지 말할 수 있다.'],
    body: [
      'Python 공식 자습서는 프로그래밍 경험이 있는 학습자가 Python 문법과 특징을 빠르게 훑도록 설계되어 있습니다.',
      '인터프리터를 곁에 두고 작은 예제를 직접 실행하면 문법과 실행 결과를 함께 이해할 수 있습니다.',
    ],
    officialDocs: [{ title: '파이썬 자습서', url: 'https://docs.python.org/ko/3/tutorial/index.html' }],
  },
  {
    id: 'numbers-and-text',
    slug: 'numbers-and-text',
    title: '숫자와 텍스트',
    section: '파이썬 자습서',
    order: 2,
    estimatedMinutes: 15,
    summary: 'Python을 계산기처럼 쓰고 문자열과 기본 연산을 다룹니다.',
    objectives: ['숫자 연산과 문자열 표현식을 구분할 수 있다.', '문자열 연결과 f-string의 기본 형태를 사용할 수 있다.'],
    body: ['공식 자습서의 간략한 소개는 숫자, 텍스트, 리스트를 통해 Python 표현식의 감각을 보여줍니다.'],
    officialDocs: [{ title: '3.1. 파이썬을 계산기로 사용하기', url: 'https://docs.python.org/ko/3/tutorial/introduction.html#using-python-as-a-calculator' }],
  },
  {
    id: 'control-flow',
    slug: 'control-flow',
    title: '제어 흐름: if와 for',
    section: '파이썬 자습서',
    order: 3,
    estimatedMinutes: 18,
    summary: '조건과 반복으로 코드의 실행 흐름을 제어합니다.',
    objectives: ['if, for, range의 역할을 설명할 수 있다.', '조건에 따라 다른 값을 출력하는 코드를 읽을 수 있다.'],
    body: ['공식 문서의 제어 흐름 장은 if 문, for 문, range(), break/continue, match, 함수 정의로 이어집니다.'],
    officialDocs: [{ title: '4. 기타 제어 흐름 도구', url: 'https://docs.python.org/ko/3/tutorial/controlflow.html' }],
  },
  {
    id: 'functions',
    slug: 'functions',
    title: '함수 정의하기',
    section: '자료 구조와 함수',
    order: 4,
    estimatedMinutes: 20,
    summary: 'def, 매개변수, 반환값으로 재사용 가능한 코드를 만듭니다.',
    objectives: ['def 문으로 함수를 정의할 수 있다.', 'return 값과 print 출력의 차이를 설명할 수 있다.'],
    body: ['함수는 이름 있는 코드 조각입니다. 매개변수로 입력을 받고 return으로 결과를 돌려줄 수 있습니다.'],
    officialDocs: [{ title: '4.9. 함수 정의 더 보기', url: 'https://docs.python.org/ko/3/tutorial/controlflow.html#more-on-defining-functions' }],
  },
  {
    id: 'data-structures',
    slug: 'data-structures',
    title: '자료 구조: 리스트와 딕셔너리',
    section: '자료 구조와 함수',
    order: 5,
    estimatedMinutes: 25,
    summary: '리스트 메서드, 딕셔너리, 순회 패턴을 연습합니다.',
    objectives: ['리스트 메서드 append, remove, sort의 역할을 설명할 수 있다.', '딕셔너리로 이름 있는 값을 묶을 수 있다.'],
    body: ['공식 문서의 자료 구조 장은 리스트 메서드, 리스트 컴프리헨션, 튜플, 집합, 딕셔너리를 소개합니다.'],
    officialDocs: [{ title: '5. 자료 구조', url: 'https://docs.python.org/ko/3/tutorial/datastructures.html' }],
  },
  {
    id: 'modules',
    slug: 'modules',
    title: '모듈과 표준 라이브러리',
    section: '모듈과 라이브러리',
    order: 6,
    estimatedMinutes: 20,
    summary: 'import로 코드를 나누고 표준 라이브러리 문서를 찾아봅니다.',
    objectives: ['모듈을 import하는 기본 문법을 사용할 수 있다.', '표준 라이브러리 레퍼런스에서 모듈 문서를 찾을 수 있다.'],
    body: ['Python은 작은 파일을 모듈로 나누고 import로 재사용합니다. 표준 라이브러리는 설치 없이 사용할 수 있는 풍부한 도구 모음입니다.'],
    officialDocs: [{ title: '6. 모듈', url: 'https://docs.python.org/ko/3/tutorial/modules.html' }],
  },
  {
    id: 'io-files',
    slug: 'io-files',
    title: '입출력과 파일 다루기',
    section: '모듈과 라이브러리',
    order: 7,
    estimatedMinutes: 22,
    summary: '문자열 포매팅과 with open 패턴으로 파일을 안전하게 읽고 씁니다.',
    objectives: ['with 문으로 파일을 열고 닫는 흐름을 설명할 수 있다.', '텍스트 파일을 쓰고 읽는 기본 패턴을 사용할 수 있다.'],
    body: ['공식 문서의 입출력 장은 보기 좋은 출력, 파일 읽기/쓰기, JSON 직렬화의 기본 흐름을 소개합니다.'],
    officialDocs: [{ title: '7. 입력과 출력', url: 'https://docs.python.org/ko/3/tutorial/inputoutput.html' }],
  },
  {
    id: 'exceptions',
    slug: 'exceptions',
    title: '에러와 예외 처리',
    section: '견고한 프로그램',
    order: 8,
    estimatedMinutes: 24,
    summary: 'try/except로 예외를 처리하고 사용자에게 안전한 결과를 돌려줍니다.',
    objectives: ['문법 에러와 예외의 차이를 설명할 수 있다.', 'try/except/else/finally 흐름을 읽을 수 있다.'],
    body: ['공식 문서의 에러와 예외 장은 실행 중 발생하는 예외를 잡아 프로그램 흐름을 유지하는 방법을 다룹니다.'],
    officialDocs: [{ title: '8. 에러와 예외', url: 'https://docs.python.org/ko/3/tutorial/errors.html' }],
  },
  {
    id: 'classes',
    slug: 'classes',
    title: '클래스와 객체',
    section: '견고한 프로그램',
    order: 9,
    estimatedMinutes: 28,
    summary: 'class, __init__, 인스턴스 속성으로 데이터를 행동과 함께 묶습니다.',
    objectives: ['클래스와 인스턴스의 관계를 설명할 수 있다.', '__init__과 self의 기본 역할을 이해할 수 있다.'],
    body: ['공식 문서의 클래스 장은 Python의 이름 공간, 클래스 객체, 인스턴스 객체, 메서드 객체를 단계적으로 소개합니다.'],
    officialDocs: [{ title: '9. 클래스', url: 'https://docs.python.org/ko/3/tutorial/classes.html' }],
  },
]

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug)
}

export function getLessonById(id: string) {
  return lessons.find((lesson) => lesson.id === id)
}

export function lessonsBySection() {
  return lessons.reduce<Record<string, Lesson[]>>((groups, lesson) => {
    groups[lesson.section] = [...(groups[lesson.section] ?? []), lesson]
    return groups
  }, {})
}
