const printMovieReview = (movie) => {
  const { title, releaseYear, reviewers } = movie;
  console.log("제목: ", title ?? "제목 미정");
  console.log("개봉: ", releaseYear ?? "개봉일 미정");
  console.log("첫 번째 리뷰어: ", reviewers[0] ?? "리뷰어 미정");
}

const solveQuiz1 = () => {
  console.log("------------------------------------------");
  printMovieReview({
    title: "하얼빈",
    releaseYear: 2024,
    reviewers: ["박정민", "김효빈", "이정환"],
  });
  printMovieReview({
    title: "위키드",
    releaseYear: 2024,
    reviewers: [],
  });
  
  console.log("------------------------------------------");
}
