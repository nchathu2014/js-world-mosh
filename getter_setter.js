
function Circle(radius) {

    this.radius = radius;
    let defaultLocation = { x: 10, y: 0 };


    //Sol 1
    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    this.draw = function () {
        console.log('draw', defaultLocation)
    }

    // Sol 2: creating getters and setters

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid Location');
            defaultLocation = value
        }
    });
}


const c = new Circle(10);
console.log(c.getDefaultLocation()); // Solution 1
c.defaultLocation = { x: 10, y: 100 }; // Solution 2
console.log(c.defaultLocation);

