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
        // checking if the write pointer is still less than the static array size and if it is then there must still be empty indexes
        if (this.writeIndex < this.arraySize) {
            this.array.set(this.writeIndex, data);
            this.writeIndex++;
        } else {
            // else the write pointer must be pointing at the last index which would already have been set. Thus resetting the write pointer to 0 and overwriting from index 0
            this.writeIndex = 0;
            this.array.set(this.writeIndex, data);
        }
    }

    dequeue() {
        if (this.readIndex < this.arraySize) {
            this.array.set(this.readIndex, null);
            this.readIndex++;
        } else {
            this.readIndex = 0;
            this.array.set(this.readIndex, null);
            this.readIndex++;
        }
    }

    peek() {
        return this.array.get(this.readIndex);
    }

    size() {
        let count = 0;

        for (const element of this.array) {
            if (element !== null && element !== undefined) {
                count++;
            }
        }
        return count;
    }

    get(index) {
        if (index < 0 || index > this.arraySize) {
            throw new Error("Invalid index. Out of bounds!");
        }
        return this.array.get(index);
    }

    isEmpty() {
        let size = this.size()
        if (size === 0) {
            return true;
        }
        return false;
    }
    
    isFull() {
        let size = this.size()
        if (size === this.arraySize) {
            return true;
        }
        return false;
    }

    capacity() {
        return this.arraySize
    }
}
