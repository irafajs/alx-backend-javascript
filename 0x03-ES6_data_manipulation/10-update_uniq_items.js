export default function updateUniqueItems(value) {
  if (!(value instanceof Map)) {
    throw new Error('Cannot process');
  }
  value.forEach((quantity, item) => {
    if (quantity === 1) {
      value.set(item, 100);
    }
  });
  return value;
}
