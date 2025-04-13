function printClickEventLogs(logs = []) {
  const formattedLogs = logs.filter(log => log.type === "click")
    .map(log => `${log.type} :: ${new Date(log.date).toLocaleString("ko-KR")}`);

  formattedLogs.forEach(log => console.log(log));
}

// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00
const solveQuiz2 = () => {
  console.log("------------------------------------------");
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
  
  console.log("------------------------------------------");
}
