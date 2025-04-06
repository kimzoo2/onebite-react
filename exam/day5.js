// Q1

function printMovieReview({ title, releaseYear, reviewers }) {
  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  const [firstReviewer = "리뷰어 미정"] = reviewers;
  console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}

printMovieReview({
  title: "하얼빈",
  releaseYear: 2024,
  reviewers: ["박정민", "김효빈", "이정환"],
});

// 출력 결과 :
// 제목 : 하얼빈
// 개봉 : 2023
// 첫 번째 리뷰어 : 박정민

printMovieReview({
  title: "위키드",
  releaseYear: 2024,
  reviewers: [],
});

// 출력 결과 :
// 제목 : 위키드
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정

// Q2
function printAvgScore(students) {
  /*
  // 배열?
  for (let student of students) {
    const avg = 0;
    for (let score of student.scores) {
      avg += score;
    }
    console.log(`${student.name} : ${avg / 5}`);
  }
    */

  for (let key in students) {
    let avg = 0;
    // console.log(student);
    let student = students[key];
    let scores = student.scores;
    // console.log(scores);
    for (let score of scores) {
      avg += score;
    }
    console.log(`${key} : ${avg / scores.length}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});
