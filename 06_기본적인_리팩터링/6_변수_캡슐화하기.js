// 예시
let defaultOwner = { firstName: "마틴", lastName: "파울러" };

function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}

spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });
