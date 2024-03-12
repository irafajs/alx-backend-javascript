export default function cleanSet(set, startString) {
  const newString = [];

  if (!startString || typeof startString !== 'string') {
    return '';
  }
  for (const word of set) {
    if (word.startsWith(startString)) {
      const newWord = word.replace(startString, '');
      newString.push(newWord);
    }
  }
  return newString.join('-');
}
