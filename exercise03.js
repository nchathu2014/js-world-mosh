const numbers = [1, 2, 3, 4];

const output = except(numbers, [5, 4]);
console.log('###', output);

function except(array, excluded) {

    for (let num of excluded) {
        if (array.includes(num)) {
            const index = array.indexOf(num);
            array.splice(index, 1)
        }
    }

    return array;
}