const calculateAverage = (numberArr) => {
  return numberArr.reduce((acc, curr) => acc + curr, 0) / numberArr.length;
}

const printAvgScore = (students = {}) => {
  for (const [name, { scores = [] }] of Object.entries(students)) {
    const avgScore = calculateAverage(scores);
    console.log(`${name}: ${avgScore}`);
  }
}

const solveQuiz2 = () => {
  console.log("------------------------------------------");
  printAvgScore({
    이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
    김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
    홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
  });
  console.log("------------------------------------------");
}
