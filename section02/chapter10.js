// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1997/01/07/10:10:10"); // 1997-01-07도 가능
let date3 = new Date(1997, 1, 7, 23, 59, 59);
console.log(date2);

// 2. 타임 스탬프
// UTC(협정세계시)란? 세계 모든 나라가 표준으로 생각하는 기준 시간
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC)로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // js는 Month를 0부터 시작한다 함;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월임
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // Thu Mar 30 2023 (날짜만 출력)
console.log(date1.toLocaleString()); // 2023. 3. 30. 오후 11:59:59 (현지화된 형태로 출력)
