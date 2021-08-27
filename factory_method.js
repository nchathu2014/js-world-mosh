
/*
If a function returns an object, we call it as Factory function
*/
function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log('Draw');
        }
    }
}

const c = createCircle(10);
const c1 = createCircle(15);
console.log(c, c1);