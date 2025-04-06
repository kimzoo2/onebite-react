// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// 되게 자유롭다.
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스", // 객체 생성할 때 끝에 쉼표 가능??
  job: "FE Developer",
  extra: function () {}, // 함수는 스코프가?
  // 객체도 가능..
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name2; // 존재하지 않는 객체에 접근하려고 하면 undefined 발생
console.log(name); // -는 무시해도 됨

let age = person["age"]; //쌍따옴표로 감싸줘야 변수로 접근, 아니면 인자로 이해하는 듯
console.log(age);

let property = "hobby";
let hobby = person[property]; // hobby를 가져옴

console.log(hobby); // 동적으로 프로퍼티를 변화시키며 가져올 수 있게 됨

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
