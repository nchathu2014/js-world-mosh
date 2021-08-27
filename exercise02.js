// Area of a circle

const circle = {
    radius: 0,

    get area() {
        const area = Math.PI * this.radius ** 2;
        return area.toFixed(2);
    }
};

circle.radius = 1;

console.log('R:', circle, circle.area);
