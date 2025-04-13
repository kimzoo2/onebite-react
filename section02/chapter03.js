// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

/*
let one = arr[0];
let two = arr[1];
let three = arr[2];
*/
let [one, two, three, four = 4] = arr; // arr 변수들이 각 원소에 할당된다.
// four = 4는 기본값 할당
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// let name = person.name;
let { name, age: myAge, hobby, extra = "hello" } = person;

console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
