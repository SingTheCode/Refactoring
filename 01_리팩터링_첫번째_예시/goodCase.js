const 과목목록 = require("./subjects.json");
const 구매목록 = require("./fees.json");

function statement(구매목록) {
  let result = `청구 내역 (고객명: ${구매목록.소비자})\n`;

  for (let 수강 of 구매목록.수강목록) {
    result += ` ${과목(수강).이름}: ${과목요금(수강, 과목(수강))}원 (${
      수강.학생수
    }명)\n`;
  }

  result += `수강료 총액: ${수강료총액()}원\n`;
  result += `포인트: ${포인트총액()}점\n`;
  return result;
}

function 수강료총액() {
  let result = 0;
  for (let 수강 of 구매목록.수강목록) {
    result += 과목요금(수강);
  }
  return result;
}

function 과목요금(a수강) {
  let result = 0;

  switch (과목(a수강).분야) {
    case "frontend":
      result = 40000;
      if (a수강.학생수 > 30) {
        result += 1000 * (a수강.학생수 - 30);
      }
      break;
    case "backend":
      result = 30000;
      if (a수강.학생수 > 20) {
        result += 10000 + 500 * (a수강.학생수 - 20);
      }
      break;
    case "AI":
      과목요금 = 20000;
      if (수강.학생수 > 10) {
        과목요금 += 100000 * (수강.학생수 - 10);
      }
      break;
    default:
      throw new Error(`알 수 없는 과목 타입: ${과목(a수강).분야}`);
  }
  return result;
}

function 과목(a수강) {
  return 과목목록[a수강.과목ID];
}

function 포인트총액() {
  let result = 0;
  for (let 수강 of 구매목록.수강목록) {
    result += 수강포인트(수강);
  }
  return result;
}

function 수강포인트(a수강) {
  let result = 0;
  result += Math.max(a수강.학생수 - 30, 0);
  if ("frontend" === 과목(a수강).분야) {
    result += Math.floor(a수강.학생수 / 5);
  }

  // AI 타입의 포인트 지급 방법
  if ("AI" === 과목.분야) 포인트총액 += Math.floor(수강.학생수 / 10);
  return result;
}

console.log(statement(구매목록, 과목목록));
