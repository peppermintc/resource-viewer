### 실행 방법

- typed-design-system package.json 변경 필요

### typed-design-system 호환 문제 해결

<img src="./previews/error.png" alt="error" />

typed-design-system을 설치 후 바로 사용을 시도해보니 오류가 나타났습니다. 원인은 최근 Emotion 라이브러리의 버전이 올라가면서 생긴 문제였습니다. node_modules/typed-design-system/package.json의 @emotion/core와 @emotion/styled 대신에 @emotion/react로 변경 후 typed-design-system의 의존성을 다시 설치해보니 정상 작동하였습니다.
