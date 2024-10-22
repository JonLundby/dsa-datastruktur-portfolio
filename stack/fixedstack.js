import StaticArray from "../queue/StaticArray.js";

export default class FixedStack {
    constructor(size) {
        this.array = new StaticArray(size);
        this.stackPointer = 0;
    }

    push(data) {
        this.array[this.stackPointer++] = data;
    }

    pop() {
        const nodeToPop = this.array[--this.stackPointer];
        this.array[this.stackPointer] = null;
        return nodeToPop;
    }

    peek() {
        return this.array[this.stackPointer - 1];
    }

    size() {
        return this.stackPointer;
    }

    get(index) {
        return this.array[index];
    }
}
