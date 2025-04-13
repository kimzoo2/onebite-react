const createReactBook = () => {
  return {
    title: "한 입 크기로 잘라먹는 리액트",
    author: "이정환"
  }
}

const createLegacyBook = () => {
  return {
    title: "옛날 책",
    author: "옛날 작가",
    publishedYear: 1930,
  }
}

const getField = (book, fieldName) => {
  return book[fieldName];
}

const createNotiWord = (book) => {
  const publishedYear = getField(book, "publishedYear");
  return publishedYear ?  `출판년도는 ${publishedYear}입니다.` : "출판년도 정보가 없습니디."
}

const createNotiWordAsInOperator = (book) => {
  if ("publishedYear" in book) {
    return `출판년도는 ${book.publishedYear}입니다.`;
  } else {
    return "출판년도 정보가 없습니다.";
  }
}

const solveQuiz1 = () => {
  console.log("목표: 주어진 책 정보 객체에서 특정 속성이 존재하는지 확인하고, 그 결과를 출력합니다.");
  console.log("다음 요구사항을 만족하는 코드를 작성하세요");
  console.log("book 객체 내에 '출판년도(publishedYear)' 속성이 있는지 확인해 결과에 따라 다음과 같이 출력합니다.");
  console.log("속성이 있으면: \"출판년도는 ${출판년도}입니다.\"");
  console.log("속성이 없으면: \"출판년도 정보가 없습니다.\"");

  console.log("======> ");
  console.log("속성 존재: ", createNotiWord(createLegacyBook()));
  console.log("속성 미존재: ", createNotiWord(createReactBook()));
}
