const 과목목록 = require("./subjects.json");
const 구매목록 = require("./fees.json");

// 과목과 수강료를 관리
function statement(구매목록, 과목목록) {
  let 수강료총액 = 0;
  let 포인트총액 = 0;
  let result = `청구 내역 (고객명: ${구매목록.소비자})\n`;

  for (let 수강 of 구매목록.수강목록) {
    const 과목 = 과목목록[수강.과목ID];
    let 과목요금 = 0;

    switch (과목.분야) {
      case "frontend":
        과목요금 = 40000;
        if (수강.학생수 > 30) {
          과목요금 += 1000 * (수강.학생수 - 30);
        }
        break;
      case "backend":
        과목요금 = 30000;
        if (수강.학생수 > 20) {
          과목요금 += 10000 + 500 * (수강.학생수 - 20);
        }
        break;
      default:
        throw new Error(`알 수 없는 과목 타입: ${과목.분야}`);
    }

    포인트총액 += Math.max(수강.학생수 - 30, 0);
    if ("frontend" === 과목.분야) 포인트총액 += Math.floor(수강.학생수 / 5);

    result += ` ${과목.이름}: ${과목요금}원 (${수강.학생수}명)\n`;
    수강료총액 += 과목요금;
  }
  result += `수강료 총액: ${수강료총액}원\n`;
  result += `포인트: ${포인트총액}점\n`;
  return result;
}

console.log(statement(구매목록, 과목목록));

