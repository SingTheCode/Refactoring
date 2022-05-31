// 대학 과목
const subjects = {
  "computer-network": {"name": "Computer Network", "type": "major"},
  "philosophy": {"name": "Philosophy", "type": "minor"},
}

// 과목 수강료
const fees = {
  "customer": "Singco",
  "lectures": [
    {
      "lectureId": "computer-network",
      "students": 35
    },
    {
      "lectureId": "philosophy",
      "students": 50
    }
  ]
}


// 과목과 수강료를 관리
function statement(fees, subjects) {
  // 전체 금액
  let totalAmount = 0;
  // 장학 포인트
  let scholarshipPoints = 0;
  let result = `청구 내역 (고객명: ${fees.customer})\n`;

  for (let lecture of fees.lectures) {
    const subject = subjects[lecture.lectureId];
    let thisAmount = 0;

    switch (subject.type) {
      case "major":
        // 30명 이하일 때 기본요금 40000원
        thisAmount = 40000;
        // 과목에 듣는 학생 수가 30명이 넘으면
        if (lecture.students > 30) {
          // 초과 명수 당 1000원씩 더한다
          thisAmount += 1000 * (lecture.students - 30);
        }
        break;
      case "minor":
        thisAmount = 30000;
        if (lecture.students > 20) {
          thisAmount += 10000 + 500 * (lecture.students - 20);
        }
        break;
      default:
        throw new Error(`알 수 없는 과목 타입: ${subject.type}`);
    }
    // 장학 포인트를 적립
    scholarshipPoints += Math.max(lecture.students - 30, 0);
    // 주전공 학생 5명 마다 추가 포인트를 제공
    if ("major" === subject.type) scholarshipPoints += Math.floor(lecture.students / 5);

    // 청구 내역을 출력
    result += ` ${subject.name}: ${thisAmount} (${lecture.students}석)\n`;
    totalAmount += thisAmount;
  }
  result += `수강료 총액: ${totalAmount}\n`;
  result += `장학금 포인트: ${scholarshipPoints}점\n`;
  return result;
}

console.log(statement(fees, subjects));
