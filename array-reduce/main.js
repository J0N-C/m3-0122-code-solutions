const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (previousVal, currentVal) => {
  return previousVal + currentVal;
};

console.log('sum of numbers: ', numbers.reduce(sum));

const product = (previousVal, currentVal) => {
  return previousVal * currentVal;
};

console.log('product of all numbers: ', numbers.reduce(product));

const balance = (previousVal, currentVal) => {
  if (currentVal.type === 'deposit') {
    return previousVal + currentVal.amount;
  }
  if (currentVal.type === 'withdrawal') {
    return previousVal - currentVal.amount;
  }
};

console.log('total balance: ', account.reduce(balance, 0));

const composite = (newObj, currentVal) => {
  const currentEntries = Object.entries(currentVal);
  newObj[currentEntries[0][0]] = currentEntries[0][1];
  return newObj;
};

console.log('new composite object: ', traits.reduce(composite, {}));
