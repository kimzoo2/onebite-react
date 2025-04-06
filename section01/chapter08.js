// 자바 스크립트의 특수 연산자

// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefiend가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // undefiend가 아닌 값을 저장함
console.log(var4);

let var5 = var1 ?? var3;
console.log(var5);
let var6 = var2 ?? var3; // null이 아닌 값을 연산하면 먼저 온 변수를 저장
console.log(var6);

let userName = "이정환";
let userNickName = "Winterlood";
let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello"; // 타입 제한이 없음

let t1 = typeof var7;
console.log(t1);
