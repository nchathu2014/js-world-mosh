const _array = new WeakMap();

class Stack {
    constructor() {
        _array.set(this, [])
    }

    pop() {
        if (_array.get(this).length === 0)
            throw new Error('Stack is empty')
        _array.get(this).pop();
    }
    push(val) {
        if (!val)
            throw new Error('Invalid Input');
        _array.get(this).push(val);
    }

    peek() {
        const length = _array.get(this).length;
        if (length === 0)
            throw new Error('Stack is empty')
        return _array.get(this)[length - 1];
    }

    get count() {
        return _array.get(this).length;
    }
}


const s = new Stack();