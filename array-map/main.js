const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const double = n => {
  return n * 2;
};

console.log('doubled:', numbers.map(double));

const prices = n => {
  return '$' + Number.parseFloat(n).toFixed(2);
};

console.log('prices', numbers.map(prices));

const upperCased = str => {
  return str.toUpperCase();
};

console.log('upperCased:', languages.map(upperCased));

const firstLetters = str => {
  return str[0];
};

console.log('firstLetters:', languages.map(firstLetters));
