export const weakMap = new WeakMap();

export function queryAPI(endPOintArg) {
  if (!weakMap.has(endPOintArg)) {
    weakMap.set(endPOintArg, 1);
  } else {
    const count = weakMap.get(endPOintArg);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endPOintArg, count + 1);
  }
}
