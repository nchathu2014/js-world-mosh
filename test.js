
// Enumirating properties of an object

const circle = {
    radius: 1,
    draw: function () {
        console.log('Draw..')
    }
};

//Enumeration methods of an object
for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key, circle[key]);

for (let entries of Object.entries(circle))
    console.log(entries);

// Check property availability of an object
const x = ('radius' in circle) ? 'Yes' : 'No';
console.log(x);