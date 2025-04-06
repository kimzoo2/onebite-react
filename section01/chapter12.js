// 1. 함수 표현식
function funcA() {
  // console.log("funcA");
}

let varA = funcA; // 함수를 변수에 저장
console.log(varA);

let varB = function funcB() {
  // 익명함수 = 값으로 출력이 되기 때문에 호이스팅의 대상이 되지 않음
  // console.log("funcB");
};

varB();
// funcB(); 함수 이름으로는 호출 못 함

// 2. 화살표 함수 (람다)
let varC = (value) => {
  console.log(value);
  return value + 1; // function, 반환 모두 생략 가능
};
console.log(varC(10));
