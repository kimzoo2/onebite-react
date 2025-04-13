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

// 노드가 필요한 이유?
// 웹 페이지 내부에 필요한 기능을 이해 만들어진 기능

// 매우 유연하게 설계되어 있어서 생산성 중심의 언어임
// 웹 브라우저 밖에서도 쓰게 해줘~ -> node.js가 등장
// 노드를 이용해서 자바 스크립트를 실행시킴

// npm(node program manger)
// 노드 패키지 관리하는 프로그램
// node.js는 프로젝트를 패키지라는 단위로 만듦

// 패키지의 뿌리가 될 폴더가 필요함
