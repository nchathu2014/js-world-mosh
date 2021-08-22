const numbers = [1, 2, 3, 4, 5];

const joinedArray = numbers.join(',');
console.log(numbers, joinedArray);

// for strings

const greet = "Hello JavaScript Welcome to the World";
splittedString = greet.split(',')
console.log(greet, splittedString);

//Usecase for join, split is for URL slug

const url = 'http://www.test.com';
const title = "Example Title";
const slug_title = title.split(' ').join('-').toLocaleLowerCase();
const full_url = `${url}/${slug_title}`;
console.log(full_url)