// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// CommonJS 모듈 시스템에 의해 math 모듈에서 내보내짐
// 내보내진 기능들은 다른 모듈에서 내장함수인 require를 통해 불러와 사용할 수 있음
module.exports = {
  add, // add : add 동일
  sub : sub
}