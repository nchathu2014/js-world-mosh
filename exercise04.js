


// My Solution
/* function move(array, index, offset) {

    const output = [...array]; // Take a copy, original array will remain same
    const number = output[index];
    let finalIndex = index + offset;

    if (finalIndex < 0 || finalIndex >= output.length) {
        console.error('Invalid Offset');
        return;
    }

    output.splice(index, 1);
    output.splice(finalIndex, 0, number);

    return output;
}
 */

function move(array, index, offset) {
    const output = [...array]; // Take a copy, original array will remain same
    let finalIndex = index + offset;
    if (finalIndex < 0 || finalIndex >= output.length) {
        console.error('Invalid Offset');
        return;
    }


    const deletedElement = output.splice(index, 1)[0];
    output.splice(finalIndex, 0, deletedElement);

    return output;
}

const numbers = [1, 2, 3, 4];
const output = move(numbers, 1, 1);

console.log('###', output, numbers);