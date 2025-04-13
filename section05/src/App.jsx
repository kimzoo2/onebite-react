import './App.css'
import Button from './components/Button'
import JsxExpression from './components/JsxExpression'

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1, 
    b: 2, 
    c: 3
  }
  return (
    <>
      <JsxExpression />
      <Button {...buttonProps}></Button>
      <Button text={"블로그"}></Button>
      <Button text={"카페"}>
        <div>자식 요소</div>
      </Button>
    </>
  )
}

export default App
