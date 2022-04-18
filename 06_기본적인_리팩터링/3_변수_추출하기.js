function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * prder.itemPrice * 0.1, 100)
  );
}
