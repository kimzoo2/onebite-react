// 객체로 반환됨
// CommonJS
// const { add, sub } = require("./math");

// ES -> 확장자까지 명시해줘야 함 
import mul, { add, sub } from "./math.js";

console.log("HELLO WORLD");
console.log(add(1, 2));
console.log(sub(2, 1));
console.log(mul(1, 3));