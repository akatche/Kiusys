
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

export const sortByVowels = data => {
  return data.sort((a, b) => {
    const countA = countVowels(a.name);
    const countB = countVowels(b.name);

    if (countA !== countB) {
      return countA - countB;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
}
