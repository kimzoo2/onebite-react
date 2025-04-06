const book = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
  // publishedYear: 2013,
};

let publishedYear = book && book.publishedYear;

console.log(
  publishedYear
    ? `출판 년도는 ${publishedYear}입니다.`
    : "출판년도 정보가 없습니다."
);

if ("publishedYear" in book) {
  console.log(`출판 년도는 ${publishedYear}입니다.`);
} else {
  // Falsy하면 아래 출력
  console.log("출판년도 정보가 없습니다.");
}
