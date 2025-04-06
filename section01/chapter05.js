// 원시타입
// 1. Number Type
let num1 = 27; // 정수
let num2 = 1.5; // 실수
let num3 = -20; // 음수
/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
*/
// 사칙연산 모두 가능

let inf = Infinity; // 양의 무한대도 가능
let mInf = -Infinity; // 음의 무한대도 가능

let nan = NaN; // 수치 연산 실패했을 때 발생하는 값

console.log(inf);
console.log(mInf);

// 2. String Type
let myName = "김주희";
let myLocation = "목동";
let introduce = myName + myLocation;

console.log(introduce);

// 템플릿 리터럴 문법 - 백틱도 가능
// 변수의 값을 동적으로 데이터 세팅 가능
let introductText = `${myName}는 ${myLocation}에 거주합니다`;
console.log(introductText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
console.log(empty);

// 5. undefined Type 어떤 값도 할당하지 않았을 때 발생하는 값
let none;
console.log(none);

// undefiendType은 아무런 값도 할당하지 않았을 때 발생하는 값이고
// null은 어떠한 값도 없음을 의미할 때 쓰는 값 (할당은 했으나 값은 없다)
