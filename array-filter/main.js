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

const evenNumbers = numbers.filter(n => {
  return n % 2 === 0;
});

const overFive = numbers.filter(n => {
  return n > 5;
});

const startsWithE = names.filter(n => {
  return n.startsWith('E');
});

const haveD = names.filter(n => {
  return n.toLowerCase().includes('d');
});
