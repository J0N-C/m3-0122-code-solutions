const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = n => {
  return n % 2 === 0;
};

console.log('evenNumbers:', numbers.filter(evenNumbers));

const overFive = n => {
  return n > 5;
};

console.log('overFive:', numbers.filter(overFive));

const startsWithE = n => {
  return n.startsWith('E');
};

console.log('startsWithE:', names.filter(startsWithE));

const haveD = n => {
  return n.toLowerCase().includes('d');
};

console.log('haveD:', names.filter(haveD));
