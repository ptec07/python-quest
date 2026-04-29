import type { Quiz } from '../types'

export const quizzes: Quiz[] = [
  {
    id: 'getting-started-interpreter',
    lessonId: 'getting-started',
    question: 'Python 공식 자습서를 따라갈 때 대화형 인터프리터가 유용한 이유는?',
    choices: ['작은 표현식을 즉시 실행해 결과를 확인할 수 있어서', 'HTML을 자동으로 배포해서', '브라우저 캐시를 삭제해서'],
    answer: '작은 표현식을 즉시 실행해 결과를 확인할 수 있어서',
    explanation: '인터프리터는 공식 문서 예제를 바로 실험하며 문법과 결과를 함께 확인하게 해줍니다.',
  },
  {
    id: 'numbers-text-fstring',
    lessonId: 'numbers-and-text',
    question: '문자열 안에 변수 값을 넣는 Python f-string의 시작 형태는?',
    choices: ["f'...'", "r'...'", "b'...'"],
    answer: "f'...'",
    explanation: 'f-string은 문자열 앞에 f를 붙이고 중괄호 안에 표현식을 넣습니다.',
  },
  {
    id: 'control-flow-range',
    lessonId: 'control-flow',
    question: 'range()는 무엇을 만들까?',
    choices: ['연속된 정수 시퀀스', 'HTML 버튼', '네트워크 연결'],
    answer: '연속된 정수 시퀀스',
    explanation: 'range는 반복에 사용할 정수들을 생성하는 객체입니다.',
  },
  {
    id: 'functions-return',
    lessonId: 'functions',
    question: '함수에서 계산한 값을 호출자에게 돌려줄 때 쓰는 키워드는?',
    choices: ['return', 'print', 'import'],
    answer: 'return',
    explanation: 'return은 함수의 결과 값을 호출한 곳으로 돌려줍니다.',
  },
  {
    id: 'data-structures-dict',
    lessonId: 'data-structures',
    question: '딕셔너리에서 값에 접근할 때 주로 사용하는 것은?',
    choices: ['키', 'CSS 선택자', '포트 번호'],
    answer: '키',
    explanation: '딕셔너리는 키와 값의 매핑이며 키를 사용해 저장된 값을 꺼냅니다.',
  },
  {
    id: 'modules-import',
    lessonId: 'modules',
    question: '표준 라이브러리 모듈을 현재 파일에서 사용하려면 어떤 문을 쓰나?',
    choices: ['import', 'yield only', 'await css'],
    answer: 'import',
    explanation: 'import 문은 모듈 이름을 현재 이름 공간으로 가져와 사용할 수 있게 합니다.',
  },
  {
    id: 'io-files-with',
    lessonId: 'io-files',
    question: '파일을 열고 자동으로 닫는 데 자주 쓰는 Python 문은?',
    choices: ['with open(...) as file', 'class open file', 'for import file'],
    answer: 'with open(...) as file',
    explanation: 'with 문은 파일 같은 자원을 사용한 뒤 정리 작업을 자동으로 수행하는 데 유용합니다.',
  },
  {
    id: 'exceptions-try-except',
    lessonId: 'exceptions',
    question: '실행 중 발생할 수 있는 ValueError를 잡는 블록은?',
    choices: ['except ValueError:', 'elif ValueError:', 'return ValueError:'],
    answer: 'except ValueError:',
    explanation: 'try 블록에서 생긴 특정 예외는 except 예외이름: 블록에서 처리할 수 있습니다.',
  },
  {
    id: 'classes-self',
    lessonId: 'classes',
    question: '인스턴스 메서드에서 현재 객체를 가리키는 관례적 첫 번째 매개변수 이름은?',
    choices: ['self', 'thisBrowser', 'document'],
    answer: 'self',
    explanation: 'Python 클래스의 인스턴스 메서드는 관례적으로 첫 번째 매개변수 self를 통해 객체 자신을 받습니다.',
  },
]

export function getQuizzesForLesson(lessonId: string) {
  return quizzes.filter((quiz) => quiz.lessonId === lessonId)
}
