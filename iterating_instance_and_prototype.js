function Person(name) {
    this.name = name;

    this.speak = function () {
        console.log('SPEAK');
    }
}

Person.prototype.greet = function () {
    console.log('Hellow', this.name);
}

const p = new Person('Nuwan');
console.log(p);

// Object.keys only returns the instance(Own) members
const k1 = Object.keys(p);
console.log(k1);


// for-of loop will return all members
for (let key in p)
    console.log(key);
