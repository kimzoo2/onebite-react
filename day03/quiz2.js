const getDivisors2 = (number) => {
  let divisors = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors = [...divisors, i];
    }
  }
  return divisors;
}

const isPrimeNumber = (number) => {
  if (number === 1) {
    return true;
  }
  const divisors = getDivisors2(number);
  return divisors.length === 2;
}

const solveQuiz2 = () => {
  console.log("==============================================");
  console.log("2. 다음 요구사항을 만족하는 isPrimeNumber함수를 완성하세요.");
  console.log("1: ", isPrimeNumber(1));
  console.log("4: ", isPrimeNumber(4));
  console.log("11: ", isPrimeNumber(11));
  console.log("12: ", isPrimeNumber(12));
  console.log("==============================================");
}
