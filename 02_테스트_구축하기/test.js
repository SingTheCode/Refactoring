const { sampleProvinceData, Province, Producer } = require("./index.js");

describe("province", () => {
  test("shortfall", () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(5);
  });
});
