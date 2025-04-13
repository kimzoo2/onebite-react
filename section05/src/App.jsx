import "./App.css";
import Header from "./components/Header"; // Vite로 만든 리액트앱은 확장자명 생략 가능
import Main from "./components/Main";
import Footer from "./components/Footer";

// 함수를 이용해서 컴포넌트 생성
// 컴포넌트는 무조건 대문자여야 한다. -> 대문자가 아니면 컴포넌트로 인식하지 않음

// App(부모) -> Header(자식)
function App() {
  // html을 반환하는 함수가 component
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
