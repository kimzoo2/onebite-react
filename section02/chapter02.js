// 단락 평가(short-circuit Evaludation)란?
// 논리연산에서 첫번째 피연산자 값으로 결과가 확정된다면 두번째 피연산자에 접근하지 않는 특성

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnTrue() && returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음"); // Truthy한 문자열의 값이 세팅됨
}

printName();
printName({ name: "이정환" });
