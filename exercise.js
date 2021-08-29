const _array = new WeakMap();

class Stack {
    constructor() {
        _array.set(this, [])
        this.count = 0;
    }

    pop() {
        if (this.count === 0)
            throw new Error('Stack is empty')
        _array.get(this).pop();
        this.count--;
    }
    push(val) {
        if (!val)
            throw new Error('Invalid Input');
        _array.get(this).push(val);
        this.count++;

    }

    peek() {
        if (this.count === 0)
            throw new Error('Stack is empty')
        return _array.get(this)[this.count - 1];

    }
}


const s = new Stack();