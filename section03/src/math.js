// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

//commonjs를 통해 math 모듈이 내보내짐
/*
module.exports = {
  add,
  sub,
};
*/

// ES 모듈 시스템 (최신식)
// package.json에 "type": "module" 선언해서 사용
export { add, sub };

// 기본값 설정 가능
export default function multiply(a, b) {
  return a * b;
}
