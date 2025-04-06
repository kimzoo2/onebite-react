// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 / 2;
let num4 = 3 * 2;
let num5 = 3 % 2;

// 곱셈, 모듈러, 나눗셈이 연산 우선순위가 높음

// 3. 복합 대입 연산자 (산술 연산자와 대입 연산자)
let num7 = 10;
num7 += 20;

// 4. 증감연산자
let num8 = 10;
num8++;

// 5. 논리연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 1과 2가 같냐?
let comp2 = 1 !== 2; // 1과 2가 틀리냐?

console.log(comp1, comp2);

// == 자료형이 같은지는 비교하지 않음
let comp3 = 1 == "1"; // true가 나옴
let comp4 = 1 === 1; // false가 나옴 (자료형도 비교하기 때문이다)

console.log(comp3, comp4);

let comp5 = 2 > 1;
