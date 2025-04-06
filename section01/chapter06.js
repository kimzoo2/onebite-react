// 형 변환 (Type Casting)

// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환함

let num = 10;
let str = "20";

const reslt = num + str; // num이 string으로 형변환되었기 때문이다.
//console.log(reslt);

// 2. 명시적 형 변환
// -> 프로그래머가 내장함수를 사용해서 직접 형변환 하는 것
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자가 앞에 있어야 문자열에서 숫자만 뽑아서 형변환 가능
console.log(strToNum2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");
