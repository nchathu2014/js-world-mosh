/*
Hiding the complexity via Abstraction (Hide the details and Expose the essentials)

In this example defaultLocation and computeOptimumLocation() are not 
expose to the user. Those should be abstracted
*/

/* function Circle(radius) {

    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimumLocation = function () {
        console.log('computeOptimumLocation')
    }
    this.draw = function () {
        this.computeOptimumLocation();
        console.log('draw')
    }

} */

// make pvt properties and methods


function Circle(radius) {

    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };

    const computeOptimumLocation = function () {
        console.log('computeOptimumLocation')
    }
    this.draw = function () {
        computeOptimumLocation();
        defaultLocation = {
            x: 10, y: 100
        }
        console.log('draw', defaultLocation)
    }

}




const c = new Circle(10);
c.defaultLocation = { x: 100, y: 100 }

console.log(c);