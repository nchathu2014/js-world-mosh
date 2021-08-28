function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}


// Parent
function HTMLElement() { }


// Child
function HTMLSelectElement(items = []) {
    this.items = items;
    this.addItem = function (item) {
        items.push(item)
    };
    this.removeItem = function (item) {
        if (!items.includes(item))
            throw new Error('Item not found');
        const index = items.indexOf(item);
        items.splice(index, 1)
    }
}

extend(HTMLElement, HTMLSelectElement);

HTMLElement.prototype.focus = function () {
    console.log('Focus');
}

HTMLSelectElement.prototype.click = function () {
    console.log('Click');
}


//const htmlEl = new HTMLSelectElement();
const html = new HTMLElement();
console.log(html)


const s = new HTMLSelectElement([1, 2, 3, 4]);
console.log(s)