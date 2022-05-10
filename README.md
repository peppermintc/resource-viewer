### 실행 방법

- typed-design-system package.json 변경 필요

### typed-design-system 호환 문제 해결

<img src="./previews/error.png" alt="error" />

typed-design-system을 설치 후 바로 사용을 시도해보니 오류가 나타났습니다. 원인은 Emotion 라이브러리의 버전이 올라가면서 생긴 문제였습니다. typed-design-system의 의존성을 업데이트하여 해결하였습니다.

#### 해결 방법

1. `node_modules/typed-design-system/package.json` 열기
2. `"@emotion/core": ">=10"`와 `"@emotion/styled": ">=10"` 제거 `"@emotion/react": ">=10"` 추가
3. `cd node_modules/typed-design-system`
4. `yarn install`
