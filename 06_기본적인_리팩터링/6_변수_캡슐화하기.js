// 예시
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}

export function defaultOwner() {
  return new Person(defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

spaceship.owner = defaultOwner();
setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
