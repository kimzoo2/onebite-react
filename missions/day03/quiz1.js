const getDivisors = (number) => {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors = [...divisors, i];
    }
  }
  return divisors;
}

const solveQuiz1 = () => {
  console.log("==============================================");
  console.log("1. 변수 num의 모든 약수를 다 찾아서 출력하세요.");
  console.log("100: ", getDivisors(100));
  console.log("==============================================");
}
