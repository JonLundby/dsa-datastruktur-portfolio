import StaticArray from "./StaticArray.js";

export default class CircularBuffer {
    constructor() {
        this.array = new StaticArray(4);
        this.arraySize = this.array.length;
        this.readIndex = 0; // head
        this.writeIndex = 0; // tail
    }

    // // iterator der medtager tomme index pladser
    // [Symbol.iterator]() {
    //     let index = 0;
    //     return {
    //         next: () => {
    //             if (index < this.arraySize) {
    //                 return { value: this.array.get(index++), done: false };
    //             } else {
    //                 return { done: true };
    //             }
    //         },
    //     };
    // }

    // iterator der kun returnerer elementer i buffer (altså ikke tomme index pladser)
    [Symbol.iterator]() {
        let index = this.readIndex; // Iterere fra readIndex
        const buffer = this; 
        let iterationCount = 0;
        return {
            next() {
                // så længe iterationCount er mindre end antallet af elementer i buffer
                if (iterationCount < buffer.size()) {
                    let value = buffer.array.get(index); // hent element fra array på index plads og gem som value...
                    index = (index + 1) % buffer.arraySize; //... og skift index til næste element / klargører index til næste iteration
                    iterationCount++;
                    return { value: value, done: false };
                } else {
                    return { done: true };
                }
            },
        };
    }

    // enqueue for en buffer der ikke modtager flere elementer før dequeue har skabt mere plads
    enqueue(data) {
        // throw error hvis buffer er fuld
        let isFull = this.isFull();
        if (isFull) {
            console.log("Buffer is full!");
            throw new Error("Buffer is full!");
        } else {
            this.array.set(this.writeIndex, data);
        }
        // hvis buffer ikke var fuld, så sæt data i array hvor writeIndex pointer

        // if writeIndex is at the end of the array, reset it to 0
        if (this.writeIndex === this.arraySize - 1) {
            this.writeIndex = 0;
        } else {
            this.writeIndex++;
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
        // // example: 3 -1 + 4 = 6 --> 6 % 4 = 2
        // return (this.writeIndex - this.readIndex + this.arraySize) % this.arraySize;

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
        let size = this.size();
        if (size === 0) {
            return true;
        }
        return false;
    }

    isFull() {
        let size = this.size(); // antallet af elementer i buffer
        // tjek om der er lige så mange elementer i buffer som der er plads til
        if (size === this.capacity()) {
            return true;
        }
        return false;
    }

    capacity() {
        return this.arraySize;
    }
}
