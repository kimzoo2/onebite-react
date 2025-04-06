// 자바 스크립트는 boolean이 아닌데도 참, 거짓으로 평가한다.
// truthy(참 같은 값), falsy(거짓 같은 값)
// 조건문을 간결하게 만들 수 있다는 장점이 있음

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
  console.log("falsy");
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t2) {
  console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
  // if (person === undefined || person === null) {
  if (!person) {
    // 거짓으로 평가함
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person1 = { name: "이정환" };
let person2 = null;
printName(person2);
