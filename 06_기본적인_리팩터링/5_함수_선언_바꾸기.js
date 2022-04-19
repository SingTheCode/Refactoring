// 함수 이름 바꾸기(간단한 절차)
// function circumference(radius) {
//   return 2 * Math.PI * radius;
// }

// 함수 이름 바꾸기(마이그레이션 절차)
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 매개변수 추가하기
class Book {
  addReservation(customer) {
    this.zz_addReservation(customer);
  }

  zz_addReservation(customer) {
    this._reservations.push(customer);
  }
}
