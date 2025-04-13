1. React.js는 어떤 기술이며 왜 활용되나요?
- nodejs를 기반으로 복잡한 웹 애플리케이션을 편리하게 만들 수 있기 때문 
- dom element를 직접 관리하지 않고, 필요한 기능에 집중하여 만들 수 있음 

2. React App은 어떻게 생성할 수 있나요?
- nodejs를 통해 패키지 생성 후 필요한 라이브러리들을 가져와 생성 가능 
- 일반적으로는 vite 등의 도구를 통해 필요한 라이브러리들이 포함된 상태로 생성 
e.g) npm create vite@latest -> react 

3. React App은 어떻게 구동되나요?
- 내장된 웹서버를 실행 -> react 웹서버 실행됨 (npm run dev)
- 실행된 웹서버를 접속하면 index.html 로 보낸다. 
- index.html 내 import 되고 있는 main.jsx 모듈이 실행되어 동적으로 추가 
- main.jsx 내에는 react가 제공하는 내부 메서드를 통해 실행됨 
(index 내 id를 가져와서 root 변환 -> App 컴포넌트를 렌더링)