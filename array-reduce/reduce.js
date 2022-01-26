function reduce(array, reducer, initialValue) {
  let newValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    newValue = reducer(newValue, array[i], i, array);
  }
  return newValue;
}
