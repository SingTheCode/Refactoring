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
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

// 매개변수를 속성으로 바꾸기
function inNewEngland(aCustomer) {
  const stateCode = aCustomer.address.state
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = someCustomers.filter(c => inNewEngland(c));
