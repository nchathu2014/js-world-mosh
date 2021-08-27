let person = {
    name: "Nuwan",
    age: 56
};

console.log(person);

//Iterate over the object
//None of the properties in the Object Prototype(super class) will not print

for (let key in person)
    console.log(key);

const keys = Object.keys(person);
console.log(keys);


// Lets dril down to Object base

const ObjectBase = Object.getPrototypeOf(person);
console.log(ObjectBase);

// Get the property descriptor

const descriptor = Object.getOwnPropertyDescriptor(ObjectBase, 'toString');
console.log(descriptor);



//========================== Property Descriptors ========================
/**
 * writeable
 * enumerable
 * configurable
 *
 * By defaule all of these descriptors are true
 *
 * But you can do change on those
 */

const car = {
    model: 'A',
    color: 'RED'
};

Object.defineProperty(car, 'model', {
    writable: false,
    enumerable: false,
    configurable: false // configurable means you can remove the property

});

car.model = 'B';

console.log(car) // 'model' will not changed to 'B' because writeable descriptor is false

console.log(Object.keys(car));  // 'model' will not enumerable because enumerable descriptor is false

delete car.model;
console.log(car) // 'model' propery cannot be deleted because configurable descriptor is false





























