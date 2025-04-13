const TYPE_MAP = {
  "number": "숫자",
  "string": "문자열",
  "boolean": "불리언",
  "bigint": "빅인트",
  "function": "함수",
  "undefined": "언디파인트",
  "object": "객체"
}

const showTypeAsKoreanByMap = (value) => {
  const korean = TYPE_MAP[typeof value];
  return korean ?? "일치하는 타입 없음";
}

const showTypeAsKoreanBySwitth = (value) => {
  switch (typeof value) {
    case "number":
      return "숫자";
    case "string":
      return "문자열";
    case "boolean":
      return "불리언";
    case "bigint":
      return "빅인트";
    case "function": 
      return "함수";
    case "object": 
      return "객체";
    case "undefined": 
      return "객체";
    default:
      return "일치하는 타입 없음";
  }
}

const showTypeAsKorean = (value) => {
  return showTypeAsKoreanByMap(value);
}

const solveQuiz2 = () => {
  const x = 15;
  const y = 20;

  let max1 = Math.max(x, y);
  let max2 = x > y ? x : y;

  console.log("==============================================");
  console.log("2. 변수 a의 저장된 값의 타입을 문자열로 출력하세요.");
  console.log("true : ", showTypeAsKorean(true));
  console.log("1 : ", showTypeAsKorean(1));
  console.log("\"Hello\" : ", showTypeAsKorean("Hello"));
  console.log("42n : ", showTypeAsKorean(42n));
  console.log("() => {} : ", showTypeAsKorean(() => {}));
  console.log("undefined : ", showTypeAsKorean(undefined));
  console.log("{} : ", showTypeAsKorean({}));
  console.log("==============================================");
}
