class Shape {

    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log('Draw');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    move() {
        console.log('Move');
    }
}

const c = new Circle('red', 1);

c.move();
c.draw();