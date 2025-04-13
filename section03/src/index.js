//console.log("안녕 node.js"); // node index.js로 실행 가능

/*
const moduleData = require("./math");
const { add, sub } = require("./math");
console.log(moduleData);
console.log(moduleData.add(1, 2));
console.log(moduleData.sub(3, 4));
*/
import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor"; // 경로 명시하지 않고 이름만 명시해도 가져올 수 있음
// import mul from "./math.js"; 모듈의 기본값은 함수명 이름 변경도 가능
/*
console.log(add(1, 2));
console.log(sub(1, 2));
*/

const color = randomColor();
console.log(color);
