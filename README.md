# Python Quest

Python Quest는 [Python 3 공식 한국어 문서](https://docs.python.org/ko/3/)와 자습서 흐름을 바탕으로 만든 Vite + React + TypeScript 학습형 SPA입니다.

- Production: https://python-quest-taupe.vercel.app
- Vercel deployment: https://python-quest-n3v2qybxz-ptec07-2488s-projects.vercel.app
- 공식 문서: https://docs.python.org/ko/3/

## 주요 기능

- 공식 문서 기반 퀘스트 맵
- 레슨 상세 페이지와 공식 문서 링크
- 확장된 Python 학습 주제: 입출력, 예외 처리, 클래스
- lesson당 2개 이상 curated 실습
- 실습 선택 UI로 한 단원의 여러 실습 전환
- lesson별 퀴즈 정답/오답 피드백
- Python 코드 실습 워크스페이스
- `localStorage` 기반 진행률 저장
- JSON 기반 진행률 백업/복원
- React Router 기반 SPA 라우팅
- Vercel 직접 진입 대응 rewrite/fallback 설정

## 로컬 실행

```bash
npm install
npm run dev -- --host 127.0.0.1
```

기본 로컬 URL은 Vite가 배정하는 포트를 확인하세요. 여러 Vite 앱이 동시에 실행 중이면 브라우저 title이 `Python Quest`인지 확인해야 합니다.

## 검증 명령

```bash
npm test -- --run
npm run build
npm run lint
```

현재 확인된 결과:

- `npm test -- --run`: 3개 테스트 파일, 16개 테스트 통과
- `npm run build`: 성공
- `npm run lint`: 성공

## 배포

```bash
npx vercel --prod --yes
```

`vercel.json`은 다음 직접 진입 경로를 SPA shell로 rewrite합니다.

- `/quests`
- `/quest/(.*)`
- `/dashboard`
- `/(.*)`

빌드 스크립트는 Vercel/정적 호스팅 fallback을 위해 `dist/index.html`을 `dist/404.html`로 복사합니다.

## 콘텐츠 구조

```text
src/content/lessons.ts    # 레슨과 공식 문서 링크
src/content/exercises.ts  # 실습 데이터
src/content/quizzes.ts    # 퀴즈 데이터
src/features/progress/    # 진행률 저장/복구 로직
src/pages/                # Home, Quest Map, Lesson, Practice, NotFound
```

## 공식 문서 출처

학습 순서와 개념은 Python Software Foundation의 공식 Python 3 한국어 문서 및 자습서를 참고해 원문을 그대로 복제하지 않고 학습용 설명/실습으로 재구성했습니다.

- https://docs.python.org/ko/3/tutorial/index.html
- https://docs.python.org/ko/3/tutorial/introduction.html
- https://docs.python.org/ko/3/tutorial/controlflow.html
- https://docs.python.org/ko/3/tutorial/datastructures.html
- https://docs.python.org/ko/3/tutorial/modules.html
