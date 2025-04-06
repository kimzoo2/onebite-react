// 퀴즈 1
const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max);

// 퀴즈 2
const a = true;
switch (typeof a) {
  case "string":
    console.log("문자열");
  case "number":
    console.log("숫자");
  case "boolean":
    console.log("불리언");
}
console.log(typeof a);

// 퀴즈 3
/*
 *  
주어진 온도에 따라 다음 메세지를 콘솔에 출력하세요
온도가 0°C보다 낮으면 "매우 추움"를 출력합니다.
온도가 0°C 이상 10°C 미만이면 "추움."를 출력합니다.
온도가 10°C 이상 20°C 미만이면 "적당"를 출력합니다.
온도가 20°C 이상이면 "더움"를 출력합니다.
 */

let temperature = 10;

if (temperature < 0) {
  console.log("매우 추움");
} else if (temperature < 10) {
  console.log("추움");
} else if (temperature < 20) {
  console.log("적당");
} else {
  console.log("더움");
}
