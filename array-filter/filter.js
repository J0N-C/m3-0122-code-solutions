function filter(array, predicate) {
  const filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
}
