// promise란?
// 비동기 작업들을 효율적으로 처리할 수 잇게 만드는 자바스크립트의 내장 객체
// 비등기 작업을 래핑한 객체임

// promise의 3가지 상태
// 대기 : 작업이 완료되지 않은 상태
// 성공 : 성공적으로 마무리된 상태
// 실패 : 비동기 작업이 실패한 상태

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수 = executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

const p = add10(0);

p.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .catch((error) => {
    console.log(error);
  });
// then 메서드 : 성공했을 때만 실행된다
// -> 그 후에
// promise 객체의 결과도 전달됨
// 콜백 지옥에 빠지지 않고 별도로 처리 가능하게 됨
/*
promise
  .then((value) => {
    console.log(value);
  })
  // promise chaining
  // catch 메서드 : reject 됐을 때만 실행된다
  .catch((error) => {
    console.log(error);
  });
*/
