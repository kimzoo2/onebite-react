const asColdFeelingWord = (temperatureNumber) => {
  if (temperatureNumber < 0) {
    return "매우 추움";
  }
  if (temperatureNumber >= 0 && temperatureNumber < 10) {
    return "추움";
  }
  if (temperatureNumber >= 10 && temperatureNumber < 20) {
    return "적당";
  }
  if (temperatureNumber >= 20) {
    return "더움";
  }
}

const solveQuiz3 = () => {
  console.log("==============================================");
  console.log("3. 주어진 온도에 따라 다음 메세지를 콘솔에 출력하세요.");
  console.log("-1: ", asColdFeelingWord(-1));
  console.log("0: ", asColdFeelingWord(0));
  console.log("10: ", asColdFeelingWord(10));
  console.log("20: ", asColdFeelingWord(20));
  console.log("==============================================");
}
