/*
    NOTE: Iteratoren er implementeret således at den kun returnerer elementer i bufferen (altså ikke tomme index pladser)
    NOTE: Gamle elementer i bufferen IKKE bliver overskrevet når bufferen er fuld
*/

import StaticArray from "./StaticArray.js";

export default class CircularBuffer {
    constructor() {
        this.array = new StaticArray(4);
        this.arraySize = this.array.length;
        this.readIndex = 0; // head
        this.writeIndex = 0; // tail
        this.count = 0;
    }

    // iterator der kun returnerer elementer i buffer (altså ikke tomme index pladser)
    [Symbol.iterator]() {
        let index = this.readIndex; // Iterere fra readIndex
        const buffer = this;
        let iterationCount = 0;
        return {
            next() {
                // så længe iterationCount er mindre end antallet af elementer i buffer og buffer ikke er tom
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
            throw new Error("Buffer is full!");
        } else {
            // hvis buffer ikke var fuld, så sæt data i array hvor writeIndex pointer
            this.array.set(this.writeIndex, data);
            this.count++;
        }

        // Med modulo operator vil writeIndex altid være det som writeIndex var før + 1...
        // ...Og hvis writeIndex er lig med arraySize, så vil writeIndex blive 0 igen (således cirkulær)
        // (0 + 1) % 4 = 1
        // (1 + 1) % 4 = 2
        // (2 + 1) % 4 = 3
        // (3 + 1) % 4 = 0 reset til 0 når writeIndex er lig med arraySize
        this.writeIndex = (this.writeIndex + 1) % this.arraySize;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Buffer already is empty!");
        } else {
            if (this.readIndex < this.arraySize) {
                this.array.set(this.readIndex, null);
                this.count--;
                this.readIndex = (this.readIndex + 1) % this.arraySize;
            } else {
                this.readIndex = 0;
                this.array.set(this.readIndex, null);
                this.count--;
                this.readIndex = (this.readIndex + 1) % this.arraySize;
            }
        }
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Buffer is empty!");
        } else {
            return this.array.get(this.readIndex);
        }
    }

    size() {
        return this.count;
    }

    get(index) {
        if (index < 0 || index > this.arraySize) {
            throw new Error("Invalid index. Out of bounds!");
        }
        return this.array.get(index);
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() === this.capacity();
    }

    capacity() {
        return this.arraySize;
    }
}
