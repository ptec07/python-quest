import type { Exercise } from '../types'

export const exercises: Exercise[] = [
  {
    id: 'print-welcome-message',
    lessonId: 'getting-started',
    title: '첫 Python 출력 만들기',
    prompt: '공식 자습서처럼 작은 코드를 직접 실행한다고 생각하고, 환영 메시지를 print로 출력하세요.',
    starterCode: `# Python Quest에 온 것을 환영합니다
message = 'Python 공식 문서 읽기'
# TODO: message를 출력하세요`,
    solutionCode: `# Python Quest에 온 것을 환영합니다
message = 'Python 공식 문서 읽기'
print(message)`,
    hints: ['print()는 값을 화면에 출력합니다.', '괄호 안에 변수 이름을 넣으면 변수 값이 출력됩니다.'],
    checks: ['print(message)'],
    explanation: '공식 자습서의 첫 단계처럼 인터프리터에서 작은 표현식을 실행해 결과를 확인하는 연습입니다.',
  },
  {
    id: 'inspect-help-function',
    lessonId: 'getting-started',
    title: 'help로 문서 읽는 습관 만들기',
    prompt: '대화형 인터프리터에서 도움말을 확인한다고 생각하고, len 함수의 도움말을 여는 코드를 작성하세요.',
    starterCode: `# TODO: len 함수의 도움말을 확인하세요`,
    solutionCode: `help(len)`,
    hints: ['대화형 인터프리터에서는 help()로 객체 설명을 볼 수 있습니다.', '함수 이름을 문자열이 아니라 객체로 넘깁니다.'],
    checks: ['help(len)'],
    explanation: '공식 문서와 인터프리터 도움말을 함께 쓰는 학습 흐름을 연습합니다.',
  },
  {
    id: 'format-python-score',
    lessonId: 'numbers-and-text',
    title: 'f-string으로 점수 문장 만들기',
    prompt: '이름과 점수를 이용해 “Mingyu의 점수는 42점입니다” 형태의 문자열을 만드세요.',
    starterCode: `name = 'Mingyu'
score = 42
summary = ''
print(summary)`,
    solutionCode: `name = 'Mingyu'
score = 42
summary = f'{name}의 점수는 {score}점입니다'
print(summary)`,
    hints: ['f-string은 문자열 앞에 f를 붙입니다.', '문자열 안에서 {name}, {score}처럼 변수 값을 넣을 수 있습니다.'],
    checks: ['f', '{name}', '{score}'],
    explanation: '숫자와 텍스트 표현식을 함께 다루며 Python 문자열 포매팅의 기본을 연습합니다.',
  },
  {
    id: 'slice-python-string',
    lessonId: 'numbers-and-text',
    title: '문자열 슬라이싱으로 접두어 꺼내기',
    prompt: 'word에서 앞의 여섯 글자 Python만 잘라 prefix에 저장하세요.',
    starterCode: `word = 'PythonQuest'
prefix = ''
print(prefix)`,
    solutionCode: `word = 'PythonQuest'
prefix = word[:6]
print(prefix)`,
    hints: ['슬라이싱은 sequence[start:stop] 형태입니다.', '처음부터 여섯 번째 전까지는 [:6]으로 표현합니다.'],
    checks: ['word[:6]', 'print(prefix)'],
    explanation: '공식 자습서의 문자열 인덱싱과 슬라이싱 개념을 작은 예제로 연습합니다.',
  },
  {
    id: 'build-range-loop',
    lessonId: 'control-flow',
    title: 'range와 for로 카운트 출력하기',
    prompt: 'range(3)을 사용해 0, 1, 2를 차례대로 출력하는 for 문을 완성하세요.',
    starterCode: `# 0, 1, 2를 출력하세요
for number in ____:
    print(number)`,
    solutionCode: `# 0, 1, 2를 출력하세요
for number in range(3):
    print(number)`,
    hints: ['for 문은 반복 가능한 값을 하나씩 꺼냅니다.', 'range(3)은 0, 1, 2를 만듭니다.'],
    checks: ['for number in range(3):', 'print(number)'],
    explanation: '공식 문서의 for 문과 range() 설명에 맞춰 반복 흐름을 만드는 실습입니다.',
  },
  {
    id: 'classify-temperature',
    lessonId: 'control-flow',
    title: 'if/elif/else로 온도 분류하기',
    prompt: 'temperature 값에 따라 cold, mild, hot 중 하나를 status에 저장하세요.',
    starterCode: `temperature = 27
status = ''
# TODO: 10 미만 cold, 30 미만 mild, 그 외 hot
print(status)`,
    solutionCode: `temperature = 27
if temperature < 10:
    status = 'cold'
elif temperature < 30:
    status = 'mild'
else:
    status = 'hot'
print(status)`,
    hints: ['조건은 위에서 아래로 검사됩니다.', '두 번째 조건은 elif를 사용합니다.'],
    checks: ['if temperature < 10:', 'elif temperature < 30:', 'else:'],
    explanation: '공식 문서의 if 문 흐름처럼 조건에 따라 다른 분기를 선택합니다.',
  },
  {
    id: 'write-greet-function',
    lessonId: 'functions',
    title: '인사 함수를 return으로 완성하기',
    prompt: '이름을 받아 “안녕하세요, 이름!” 문자열을 반환하는 greet 함수를 완성하세요.',
    starterCode: `def greet(name):
    # TODO: 인사 문자열을 반환하세요
    pass

message = greet('민규')
print(message)`,
    solutionCode: `def greet(name):
    return f"안녕하세요, {name}!"

message = greet('민규')
print(message)`,
    hints: ['def 문은 함수 이름과 매개변수 목록을 만든다.', 'return은 값을 함수 바깥으로 돌려줍니다.', 'f-string을 쓰면 name 값을 문자열에 넣을 수 있습니다.'],
    checks: ['def greet(name):', 'return f"안녕하세요, {name}!"'],
    explanation: 'Python 공식 문서의 함수 정의 흐름처럼 입력을 받아 결과를 반환하는 함수를 작성합니다.',
  },
  {
    id: 'default-argument-counter',
    lessonId: 'functions',
    title: '기본 인자로 반복 횟수 정하기',
    prompt: 'repeat 함수가 기본값 times=2로 단어를 반복해 리스트를 반환하도록 완성하세요.',
    starterCode: `def repeat(word, times=2):
    # TODO: word를 times번 담은 리스트를 반환하세요
    pass

print(repeat('py'))`,
    solutionCode: `def repeat(word, times=2):
    return [word] * times

print(repeat('py'))`,
    hints: ['매개변수에 = 값을 쓰면 기본 인자가 됩니다.', '리스트도 곱셈으로 반복할 수 있습니다.'],
    checks: ['times=2', 'return [word] * times'],
    explanation: '공식 문서의 기본 인자 값 흐름을 간단한 함수로 연습합니다.',
  },
  {
    id: 'organize-list-methods',
    lessonId: 'data-structures',
    title: '리스트 메서드로 할 일 정리하기',
    prompt: 'tasks 리스트에 새 항목을 추가하고 정렬한 뒤 출력하세요.',
    starterCode: `tasks = ['문서 읽기', '예제 실행']
tasks.append('퀴즈 풀기')
# TODO: tasks를 정렬하세요
print(tasks)`,
    solutionCode: `tasks = ['문서 읽기', '예제 실행']
tasks.append('퀴즈 풀기')
tasks.sort()
print(tasks)`,
    hints: ['append는 리스트 끝에 항목을 추가합니다.', 'sort는 리스트 자체를 정렬합니다.'],
    checks: ['tasks.append', 'tasks.sort()'],
    explanation: '공식 문서의 자료 구조 장에서 다루는 리스트 메서드를 작은 예제로 연습합니다.',
  },
  {
    id: 'dictionary-lookup',
    lessonId: 'data-structures',
    title: '딕셔너리에서 값 꺼내기',
    prompt: 'profile 딕셔너리에서 language 값을 꺼내 favorite에 저장하세요.',
    starterCode: `profile = {'name': '민규', 'language': 'Python'}
favorite = ''
print(favorite)`,
    solutionCode: `profile = {'name': '민규', 'language': 'Python'}
favorite = profile['language']
print(favorite)`,
    hints: ['딕셔너리는 키로 값을 찾습니다.', "대괄호 안에 'language' 키를 넣어보세요."],
    checks: ["profile['language']", 'print(favorite)'],
    explanation: '공식 문서의 딕셔너리 예제처럼 키와 값의 매핑을 사용합니다.',
  },
  {
    id: 'import-math-module',
    lessonId: 'modules',
    title: '표준 라이브러리 모듈 import하기',
    prompt: 'math 모듈을 import하고 sqrt 함수로 제곱근을 계산하세요.',
    starterCode: `# TODO: math 모듈을 가져오세요
value = 16
root = math.sqrt(value)
print(root)`,
    solutionCode: `import math

value = 16
root = math.sqrt(value)
print(root)`,
    hints: ['모듈은 import 이름 형태로 가져옵니다.', '모듈 안의 함수는 math.sqrt처럼 점 표기법으로 사용합니다.'],
    checks: ['import math', 'math.sqrt'],
    explanation: 'Python 공식 문서의 모듈 장처럼 표준 라이브러리를 import해서 기능을 재사용합니다.',
  },
  {
    id: 'from-import-counter',
    lessonId: 'modules',
    title: 'from import로 필요한 이름만 가져오기',
    prompt: 'collections 모듈에서 Counter만 가져와 단어 빈도를 계산하세요.',
    starterCode: `# TODO: Counter를 가져오세요
words = ['py', 'quest', 'py']
counts = Counter(words)
print(counts['py'])`,
    solutionCode: `from collections import Counter

words = ['py', 'quest', 'py']
counts = Counter(words)
print(counts['py'])`,
    hints: ['from 모듈 import 이름 형태를 사용합니다.', 'Counter는 반복 가능한 값의 빈도를 셉니다.'],
    checks: ['from collections import Counter', 'Counter(words)'],
    explanation: '모듈 전체가 아니라 필요한 이름만 가져오는 import 패턴을 연습합니다.',
  },
  {
    id: 'write-text-file',
    lessonId: 'io-files',
    title: 'with open으로 텍스트 쓰기',
    prompt: 'notes.txt 파일에 Python Quest 문자열을 쓰는 with 문을 완성하세요.',
    starterCode: `text = 'Python Quest'
# TODO: notes.txt를 쓰기 모드로 열고 text를 기록하세요`,
    solutionCode: `text = 'Python Quest'
with open('notes.txt', 'w', encoding='utf-8') as file:
    file.write(text)`,
    hints: ['with open(...) as file 형태는 파일 닫기를 자동으로 처리합니다.', "쓰기 모드는 'w'입니다."],
    checks: ["with open('notes.txt', 'w', encoding='utf-8') as file:", 'file.write(text)'],
    explanation: '공식 문서의 파일 읽고 쓰기 패턴처럼 with 문으로 파일 자원을 안전하게 다룹니다.',
  },
  {
    id: 'read-lines-strip',
    lessonId: 'io-files',
    title: '파일 줄 읽고 공백 제거하기',
    prompt: 'file 객체의 각 줄에서 줄바꿈을 제거해 cleaned 리스트를 만드세요.',
    starterCode: `lines = ['alpha\n', 'beta\n']
cleaned = []
for line in lines:
    # TODO: 줄 끝 공백을 제거해 cleaned에 추가하세요
print(cleaned)`,
    solutionCode: `lines = ['alpha\n', 'beta\n']
cleaned = []
for line in lines:
    cleaned.append(line.strip())
print(cleaned)`,
    hints: ['문자열 strip()은 양끝 공백과 줄바꿈을 제거합니다.', '리스트에는 append로 값을 추가합니다.'],
    checks: ['line.strip()', 'cleaned.append'],
    explanation: '파일에서 읽은 텍스트 줄을 다듬는 가장 흔한 후처리 패턴을 연습합니다.',
  },
  {
    id: 'safe-int-conversion',
    lessonId: 'exceptions',
    title: 'try/except로 안전하게 숫자 변환하기',
    prompt: 'value를 int로 바꾸되 실패하면 number에 0을 저장하세요.',
    starterCode: `value = 'not-a-number'
# TODO: 변환 실패를 처리하세요
print(number)`,
    solutionCode: `value = 'not-a-number'
try:
    number = int(value)
except ValueError:
    number = 0
print(number)`,
    hints: ['int() 변환 실패는 ValueError를 일으킵니다.', 'except ValueError: 아래에서 대체 값을 저장하세요.'],
    checks: ['try:', 'except ValueError:', 'number = 0'],
    explanation: '공식 문서의 예외 처리 흐름처럼 실패할 수 있는 코드를 try 블록에 둡니다.',
  },
  {
    id: 'finally-cleanup-flag',
    lessonId: 'exceptions',
    title: 'finally로 정리 코드 실행하기',
    prompt: '작업 성공/실패와 관계없이 closed 값을 True로 만드는 finally 블록을 추가하세요.',
    starterCode: `closed = False
try:
    result = 10 / 2
# TODO: finally에서 closed를 True로 바꾸세요
print(closed)`,
    solutionCode: `closed = False
try:
    result = 10 / 2
finally:
    closed = True
print(closed)`,
    hints: ['finally 블록은 예외 여부와 관계없이 실행됩니다.', 'try 블록과 같은 들여쓰기 수준에 finally를 둡니다.'],
    checks: ['finally:', 'closed = True'],
    explanation: '정리 작업이 필요한 상황에서 finally를 사용하는 패턴을 익힙니다.',
  },
  {
    id: 'build-quest-class',
    lessonId: 'classes',
    title: 'Quest 클래스로 상태 묶기',
    prompt: 'Quest 클래스의 __init__에서 title과 completed 속성을 초기화하세요.',
    starterCode: `class Quest:
    def __init__(self, title):
        # TODO: title과 completed를 저장하세요
        pass

quest = Quest('함수 정의하기')
print(quest.title, quest.completed)`,
    solutionCode: `class Quest:
    def __init__(self, title):
        self.title = title
        self.completed = False

quest = Quest('함수 정의하기')
print(quest.title, quest.completed)`,
    hints: ['인스턴스 속성은 self.name 형태로 저장합니다.', '__init__은 새 인스턴스가 만들어질 때 실행됩니다.'],
    checks: ['class Quest:', 'self.title = title', 'self.completed = False'],
    explanation: '공식 문서의 클래스 장에서 다루는 인스턴스 속성과 초기화 메서드를 연습합니다.',
  },
  {
    id: 'add-instance-method',
    lessonId: 'classes',
    title: '인스턴스 메서드로 완료 처리하기',
    prompt: 'Quest 클래스에 complete 메서드를 추가해 completed를 True로 바꾸세요.',
    starterCode: `class Quest:
    def __init__(self, title):
        self.title = title
        self.completed = False

    # TODO: complete 메서드를 정의하세요

quest = Quest('클래스')
quest.complete()
print(quest.completed)`,
    solutionCode: `class Quest:
    def __init__(self, title):
        self.title = title
        self.completed = False

    def complete(self):
        self.completed = True

quest = Quest('클래스')
quest.complete()
print(quest.completed)`,
    hints: ['메서드의 첫 번째 매개변수는 self입니다.', 'self.completed 값을 True로 바꾸면 인스턴스 상태가 바뀝니다.'],
    checks: ['def complete(self):', 'self.completed = True'],
    explanation: '객체가 자신의 상태를 메서드로 바꾸는 클래스 사용 패턴을 연습합니다.',
  },
]

export function getExercisesForLesson(lessonId: string) {
  return exercises.filter((exercise) => exercise.lessonId === lessonId)
}

export function getExerciseForLesson(lessonId: string) {
  return getExercisesForLesson(lessonId)[0]
}
