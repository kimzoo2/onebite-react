// 다른 함수에 인수로 전달되는 함수

// 1. 콜백함수
function main(value) {
  console.log(value);
}

main(1);

function sub() {
  console.log("i am sub");
}

main(sub);

// main(() => console.log("i am sub"));

// 2. 콜백함수의 활용
// => 중복호출을 감소 시킬 수 있음
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});

// function repeat(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx);
//   }
// }

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

// repeat(5);
repeatDouble(5);
