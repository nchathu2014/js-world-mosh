let numbers = [-5, 2, -3, -4, 1];
const positiveNumbers = numbers.filter(value => value >= 0);
console.log(positiveNumbers);

//Map: Map the array to something elase

// Map to a html markup
const mapAray = numbers.map(num => `<li>${num}</li>`);
const html = `<ul>${mapAray.join('')}</ul>`;

console.log(html);

// Map to a object

const obj = numbers.map(num => {
    const obj = {
        value: num
    }
    return obj;
});

// We can write the same code as follows
const obj1 = numbers.map(num => ({ value: num }));

console.log(obj1);
































