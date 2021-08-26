/*
rest operator and spread operator is bit confusion

rest operator is use as function argument

rest operator => function(...arg)

spread => [...numbers]
*/

function sum(...args) {
    return args.reduce(
        (preValue, currentValue) => preValue += currentValue);
}

console.log(sum(1, 2, 3, 4, 5, 6, 10));