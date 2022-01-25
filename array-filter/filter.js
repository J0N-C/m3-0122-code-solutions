function filter(array, predicate) {
  const filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
}

const altEven = n => {
  return n % 2 === 0;
};

const altoverFive = n => {
  return n > 5;
};

const altStartsWithE = n => {
  return n.startsWith('E');
};

const altHaveD = n => {
  return n.toLowerCase().includes('d');
};
