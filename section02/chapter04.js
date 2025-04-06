// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려준다.

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr3 = [4, ...arr1, 5, 6];
console.log(arr3);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: obj1.a,
  b: obj1.b,
  c: 3,
  d: 4,
};

let obj3 = {
  ...obj2,
  e: 5,
};

console.log(obj3);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수를 의미
// function funcB(...test, ...rest) - 불가능
// function funcB(...rest, one) - 불가능
function funcB(one, ...rest) {
  // 모든 매개변수를 받아옴
  console.log(one, rest);
}

funcB("two", ...arr1);
