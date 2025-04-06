// 원시 타입 : 불변값(원본 데이터의 값이 변하지 않는다.)
// 레퍼런트 타입 : 가변값 (원본 데이터의 값이 변한다.)
let o1 = { name: "이정환" };
let o2 = { ...o1 }; // 스프레드 변수로 새로운 값을 복사해오면 안전

o2.name = "김김김";
console.log(o1);
console.log(o2);

console.log(o1 === o2);
// 깊은 비교
console.log(JSON.stringify(o1) === JSON.stringify(o2));
