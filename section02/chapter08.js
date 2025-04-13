// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각가의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

// item은 요소 idx는 인덱스, arr은 배열
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
}); // 매 반복마다 함수를 호출 3회 호출

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);
console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족(=콜백 함수가 참을 반환)하는
// 특정 요소의 인덱스(위치)를 반환하는 인덱스
let arr4 = [1, 2, 3];
let index2 = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

// console.log(index2);
// console.log(findedIndex);

// findIndex를 쓸 일은?
// indexOf는 동등비교라서 reference type에서는 확인이 어렵대
let objectArr = [{ name: "이정환" }, { name: "홍길동" }];
console.log(objectArr.indexOf({ name: "이정환" })); // -1
console.log(objectArr.findIndex((item) => item.name === "이정환")); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환

let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");
console.log(finded);
