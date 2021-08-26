const person = {

    firstName: 'First Name',
    lastName: 'Last Name',

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];

    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

};

person.fullName = "Nuwan Chathu";
console.log(person.fullName);
console.log(person);