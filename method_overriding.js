class Shape {
    draw() {
        console.log('Draw');
    }
}

class Circle extends Shape {
    draw() {
        super.draw(); // call to the parent
        console.log('Draw Circle');
    }
}

const c = new Circle();

