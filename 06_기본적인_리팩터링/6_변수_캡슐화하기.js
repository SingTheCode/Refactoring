// 예시
let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

export function defaultOwner() {
  return Object.assign({}, defaultOwnerData);
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}

spaceship.owner = defaultOwner();
setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
