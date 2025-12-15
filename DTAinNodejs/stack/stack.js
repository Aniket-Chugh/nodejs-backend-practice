// stack.js
class Stack {
    constructor(items = []) {
        this.items = items;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items);
    }
}

module.exports = Stack;
