/* function sum() {
    let sum = 0;
    for (let item in arguments)
        sum += arguments[item];
    return sum;
} */

// for-of loop can be use for Iterator objects (not for plain objects)

function sum() {
    let total = 0;
    for (let item of arguments)
        total += item;
    return total;
}


console.log(sum(1, 2, 3, 4, 5, 6));