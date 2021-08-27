/*
If a function use 'this' and create objects using 'new',
we call it as Constructor function
*/


function Circle(radius) {

    console.log(this);

    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}



const c = new Circle(1); // 'this' =  {}, because of the 'new' keyword, without 'new' it will be the 'window' object
c.draw();