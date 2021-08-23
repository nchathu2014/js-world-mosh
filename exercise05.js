const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurences(numbers, 2);

console.log('###', count);


function countOccurences(array, searchElement) {
    /* let count = 0;

    if (!array.includes(searchElement))
        return -1;

    for (let item of array)
        if (item === searchElement) count++;

    return count; */

    let count = array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0
        return accumulator + occurrence
    }, 0)

    return count;
}