
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

export const filterData = (data,filters) => {
  const formattedFilters = getFilters(filters);
  return data.filter(item => {
    return formattedFilters.every(filter => {
      return (
        item[filter.key] &&
        Array.isArray(item[filter.key]) &&
        item[filter.key].some(value => filter.value.includes(value))
      );
    });
  });
}

function getFilters(filters){
  const data = [];
  filters.forEach(obj => {
    const existingObj = data.find(item => item.key === obj.key);
    if (existingObj) {
      existingObj.value.push(obj.value);
    } else {
      data.push({
        key: obj.key,
        value: [obj.value]
      });
    }
  });
  return data;
}
