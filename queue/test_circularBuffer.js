import CircularBuffer from "./CircularBuffer.js";

const buffer = new CircularBuffer();

buffer.enqueue("F")
buffer.enqueue("O")
buffer.enqueue("U")
buffer.enqueue("R")

// const test = buffer.get(1)
// console.log(test)

for (const element of buffer) {
    console.log(element)
}

console.log("----- TEST DONE -----")