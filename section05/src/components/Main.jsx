// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 가능
// -> if문이나 for문은 오류가 발생함. 값으로 평가될 수 없기 때문에 못 씀
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀 있어야 한다
// 4. 최상위 태그는 반드시 하나여야 한다. 마땅하지 않으면 빈태그로 묶으면 됨 <></>
const Main = () => {
  // const number = 10;
  // const obj = { object: 1 };
  // return (
  //   <main>
  //     <h1>main</h1>
  //     <h2>{number + 10}</h2>
  //     {[1, 2, 3]}
  //     {true}
  //     {undefined}
  //     {null}
  //     {obj.object}
  //   </main>
  // );
  const user = {
    name: "이정환",
    isLogin: true,
  };

  return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
