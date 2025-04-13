// JSX 주의 사항 
// 1. 중괄호 내부에는 자바스크립트 표현식만 쓸 수 있다. e.g.) if, for 등 값으로 평가되는 표현식이 아니라 쓸 수 없음
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀 있어야 한다. 
// 4. 최상위 태그는 반드시 하나여야 한다. 
const ExpressionExample = () => {
  const number = 10;
  // const obj = { a: 1 };
  return (
    <main>
      <h1>main</h1>
      <h2>{ number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {[1,2,3]}
      {/* 에러는 안 나지만 렌더링 X */}
      {true} 
      {undefined}
      {null}
      {/* 객체값은 컴파일에러 - Objects are not valid as React child*/}
      {/* {obj} */}
    </main>
  )
}

export default ExpressionExample;