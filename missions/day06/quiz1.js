const splitAndCombine = (arr = []) => {
  const leftArrayEndIndex = (arr.length / 2);
  const left = arr.slice(0, leftArrayEndIndex);
  const right = arr.slice(leftArrayEndIndex, arr.length);
  
  return [...right, ...left];
}

const solveQuiz1 = () => {
  console.log("------------------------------------------");
  console.log(splitAndCombine([0, 1, 2, 3, 4, 5, 6, 7]));
  console.log("------------------------------------------");
}
