export default function hasValuesFromArray(setList, setValueCheck) {
  const missingValues = [];

  for (const value of setValueCheck) {
    if (!setList.has(value)) {
      missingValues.push(value);
    }
  }

  if (missingValues.length > 0) {
    return false;
  }

  return true;
}
