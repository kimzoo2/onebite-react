console.log("Quiz 1. 배열 분할 및 결합하기");

function splitAndCombine(arr) {
  return arr.slice(4).concat(arr.slice(0, 4));
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// Quiz 2. 클릭 이벤트 로그 처리하기
console.log("/////////////////////");
console.log("Quiz 2. 클릭 이벤트 로그 처리하기");

function printClickEventLogs(logs) {
  logs.find((obj) => {
    if (obj.type === "click")
      console.log(`${obj.type} : ` + new Date(obj.date).toLocaleString());
  });
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// Quiz 3. 카페 할인 이벤트
console.log("/////////////////////");
console.log("Quiz 3. 카페 할인 이벤트");

function getDiscountedMenus(menus) {
  // 여기에 코드를 작성하세요 ...
  menus.map((menu) => {
    menu["discountedPrice"] = menu.price - 500;
  });
  return menus;
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);

// Quiz 4. 도서 정리하기
console.log("/////////////////////");
console.log("Quiz 4. 도서 정리하기");

function getSortedBooks(books) {
  return books.sort((a, b) => {
    const aDate = new Date(a.published);
    const bDate = new Date(b.published);
    return bDate - aDate;
  });
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
