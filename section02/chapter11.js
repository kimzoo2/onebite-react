console.log(1);

// 비동기 함수는 자바 스크립트 엔진이 아닌 Web APIs 라는 엔진에서 실행된다.
// Web APIs는 브라우저가 관리하는 영역
// Web APIs가 타이머가 실행되면 콜백함수를 가지고 있다가
// 시간이 종료되면 콜백함수를 자바스크립트 엔진에 전달해주는 방식으로 실행됨
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
