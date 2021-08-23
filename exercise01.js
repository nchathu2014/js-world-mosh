//Array from Range



function arrayFromRange(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++)
        arr.push(i);
    return arr;
}


let numbers = arrayFromRange(1, -4)
console.log(numbers);