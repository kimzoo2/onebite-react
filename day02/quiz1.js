const solveQuiz1 = () => {
  const x = 15;
  const y = 20;

  let max1 = Math.max(x, y);
  let max2 = x > y ? x : y;

  console.log("==============================================");
  console.log("1. 새로운 변수 max를 만들어 x와 y중 더 큰 수를 할당합니다.");
  console.log("Using Math: ", max1);
  console.log("Using conditional operator ", max2);
  console.log("Answer is: https://github.com/winterlood/onebite-react-challenge/blob/main/missions/day02/coding-quiz/quiz1/answer.js");
  console.log("==============================================");
}
