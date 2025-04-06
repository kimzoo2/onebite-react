const add = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const calculate = (num1, num2, operator) => {
  return operator(num1, num2);
}

const solveQuiz3 = () => {
  console.log("==============================================");
  console.log("3. 다음 조건을 만족하는 함수 calc를 구현하세요");
  console.log("3개의 매개변수 num1, num2, callback을 제공받습니다.");
  console.log("callback 함수로 전달된 연산의 결과값을 콘솔에 출력하세요");
  console.log("calculate(5, 3, add): ", calculate(5, 3, add));
  console.log("calculate(5, 3, subtract): ", calculate(5, 3, subtract));
  console.log("==============================================");
}
