import StaticArray from "./StaticArray.js";

export default class CircularBuffer {
    constructor() {
        this.array = new StaticArray(4);
        this.arraySize = this.array.length;
        this.readIndex = 0; // head
        this.writeIndex = 0; // tail
    }

    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.arraySize) {
                    return { value: this.array.get(index++), done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }

    enqueue(data) {
        this.array[this.writeIndex] = data;
        this.writeIndex++;
    }

    dequeue() {
        this.array[this.readIndex] = null;
        this.readIndex++;
    }

    get(index) {
        return this.array.get(index);
    }
}
