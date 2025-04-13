// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소만 필터링해서 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백 함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  //  console.log(idx, item);
  return item * 2;
});

// console.log(mapResult1);

// 이름만 뽑아서 새로운 배열로 추출
let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
// 숫자는 제대로 정렬 못 함(사전순으로 정렬하기 때문;)
let arr3 = [10, 3, 5];

// 숫자를 정렬하려면 콜백 메서드를 넘겨야 함
arr3.sort((a, b) => {
  if (a > b) return 1; // -> b, a 배치
  else if (b > a) return -1; // -> a, b 배치
  else return 0; // a,b 자리를 그대로 유지
});

// console.log(arr3);

// 4. toSorted (최신 함수)
// 원본 배열은 냅두고 새로운 배열을 반환
let arr4 = ["c", "a", "b"];
const sorted = arr4.toSorted();

console.log(arr4);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합치는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" "); // 문자열을 연결하는 seperator를 변경할 수도 있음

console.log(joined);
