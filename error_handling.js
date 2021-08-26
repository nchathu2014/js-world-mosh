const person = {

    firstName: 'First Name',
    lastName: 'Last Name',

    set fullName(value) {

        //Defensive programming, validate parameters before processing
        if (typeof value !== 'string')
            throw new Error('Invalid value');

        const parts = value.split(' ');

        if (parts.length !== 2)
            throw new Error('Please enter First and Last name');

        this.firstName = parts[0];
        this.lastName = parts[1];

        if (this.firstName === '' || this.lastName === '')
            throw new Error('Cannot enter empty names');

    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

};

try {
    person.fullName = "Nuwan ";
} catch (error) {
    console.log(error);
    alert(error);
}


console.log(person.fullName);
console.log(person);