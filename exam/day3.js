// num의 모든 약수를 다 찾아서 출력하기
let num = 100;

function divisor(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      // ===로 비교하기..
      console.log(i);
    }
  }
}

divisor(num);

// 소수 판별기
function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

// 계산기 만들기

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculate(num1, num2, operation) {
  console.log(operation(num1, num2));
}

calculate(5, 3, add);
calculate(5, 3, subtract);
