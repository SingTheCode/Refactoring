function rating(aDriver) {
  return moreThenFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThenFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}