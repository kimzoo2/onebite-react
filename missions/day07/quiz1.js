function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  console.log("3초 후 결과를 공개하겠습니다!");
  await delay(3000);
  console.log("승자는 이정환!");
}

// 출력 결과 :
// 3초 후 결과를 공개하겠습니다!
// 승자는 이정환!
const solveQuiz1 = async () => {
  await main();
}
