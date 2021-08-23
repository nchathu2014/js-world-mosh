const numbers = [1, 2, 10, -1000, -3, -100, -9, 9];
const max = getMax(numbers);
console.log(max);


function getMax(array) {

    if (array.length === 0) return -1;

    return array.reduce((previousValue, currentValue) => {
        return previousValue > currentValue ?
            previousValue : currentValue
    });
}

