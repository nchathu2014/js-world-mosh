/*
Four phillars of OOP are,
- Polymoreprism
- Abstraction
- Inheritance
- Encapsulation
*/

// Encapsulation

// Structural programming approach
const baseSalary = 10000;
const overtime = 10;
const rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

const wage = getWage(baseSalary, overtime, rate);
console.log(wage);




// OOP approach with Encapsulation
const person = {

    baseSalary: 10000,
    overtime: 10,
    rate: 20,

    getWage() {
        return this.baseSalary + (this.overtime * this.rate)
    }
};


const wage_again = person.getWage();
console.log('WAGE: ', wage_again);