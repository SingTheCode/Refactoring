// 예제
reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// client1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

// client3
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}
