function map(array, transform) {
  const mappedArr = [];
  for (let i = 0; i < array.length; i++) {
    mappedArr.push(transform(array[i], i, array));
  }
  return mappedArr;
}
