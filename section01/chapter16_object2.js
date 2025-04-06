// 1. 상수 객체
// 새로운 값을 할당하지 못할 뿐 객체의 프로퍼티 수정은 가능하다.
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "이정환",
  //sayHi : function(){}, 둘 다 가능
  sayHi() {
    // 메서드 선언
    console.log("안녕");
  },
};

person.sayHi();
person["sayHi"]();
