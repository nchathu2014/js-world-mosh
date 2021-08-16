//01
function findMax(a, b) {
    return a > b ? a : b;
}
//console.log(findMax(10, 10));


//02
//console.log(isLandscape(11, 11));
function isLandscape(width, height) {
    return (width > height);
}

//FizzBuzz
/*
Divisible by 3 => Fizz
Divisible by 5 => Buzz
Divisible by 3 and 5 => FizzBuzz
Not Divisible by 3 or 5 => input
Not a Number => 'Not a Number'
*/

function fizzBuzz(num) {
    if (typeof num !== 'number') {
        return NaN;
    }
    if ((num % 3 === 0) && (num % 5 === 0)) {
        return 'FizzBuzz';
    }
    if (num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    return num;

}

console.log(fizzBuzz(false));

//03
/*
Speed Limit = 70
Each 5 extra speed units -> added 1 point (eg: 75 => 1 point)
If someone reach 12 points => License suspended
*/

function checkSpeed(speed, speed_limit = 70, km_per_point = 5) {

    if (speed < (speed_limit + km_per_point)) {
        return 'Ok';
    }
    const speed_units = speed - speed_limit;
    const no_of_points = Math.floor(speed_units / km_per_point);
    return (no_of_points >= 12) ? 'License suspended' : no_of_points;
}


console.log(checkSpeed(130, 70, 5));

//04
function showNumbers(limit = 10) {
    for (let i = 0; i <= limit; i++) {
        const label = i % 2 == 0 ? 'EVEN' : 'ODD';
        console.log(i, label);
    }
}

showNumbers(12);

//05: Truthy value count of an array
function countThruthy(arr) {
    count = 0;
    for (let item of arr) {
        if (item) count++;
    }
    return count;
}
const arr_new = [1, 2, , '', 3, 4, 5, 6, null];
console.log(countThruthy(arr_new));

// 06: Show String properties of a object
const movie = {
    title: 'The Winner',
    releaseYear: 2021,
    rating: 4.5,
    director: 'Steven'
};

function showProperties(movie) {
    for (let key in movie) {
        if (typeof movie[key] === 'string')
            console.log(key, movie[key]);
    }
}

showProperties(movie);


//07: Sum of Multiples of 3 and 5

function sum(limit = 10) {
    let sum = 0;

    for (let i = 1; i <= limit; i++)
        if ((i % 3 === 0) || (i % 5 === 0)) sum += i;

    return sum;
}

console.log('SUM: ', sum(10))

/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

3, 6, 9 = 18
5, 10 = 15
    (33) */

// 08: Grade
const marks = [80, 80, 50];

function calculateGrade(marks) {
    let total = 0;
    let avg = 0;
    let grade = null;

    for (let mark of marks) {
        total += mark;
    }
    avg = total / marks.length;

    console.log('AVG--->', avg)

    if (avg > 1 && avg <= 59)
        grade = 'F';

    else if (avg >= 60 && avg < 69)
        grade = 'D';

    else if (avg >= 70 && avg < 79)
        grade = 'C';

    else if (avg >= 80 && avg < 89)
        grade = 'B';

    else if (avg >= 90 && avg < 100)
        grade = 'A';

    else
        grade = 'Unknown Grade';

    return grade;

}

console.log('GRADE', calculateGrade(marks));

// 09: Stars

function showStars(rows) {
    let star = '*';
    let total = '';
    for (let i = 1; i <= rows; i++) {
        total += star;
        console.log(total)
    }
}

showStars(8)

//10.Prime Numbers

function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {

            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) console.log(i)
    }
}

showPrimes(10);