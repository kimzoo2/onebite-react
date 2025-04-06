// 함수선언

/*
function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting(); // 호출해야만 실행된다.
console.log("호출 후");
*/

let area1 = getArea(10, 20);
console.log(area1);

// 선언이 호출보다 아래 있어도 호이스팅 됨
// 자바스크립트 엔진이 호출문보다 아래 있어도 끌어올려져서 실행됨
// => 호이스팅 = 끌어올린다.
function getArea(width, height) {
  function another() {
    // 중첩 함수 (함수 내 함수)
    console.log("another");
  }
  let area = width * height;

  return area;
}
