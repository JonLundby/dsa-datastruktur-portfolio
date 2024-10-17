import CircularBuffer from "./CircularBuffer.js";

const buffer = new CircularBuffer();

// console.log("Empty buffer: ", buffer.isEmpty()); // expected: true
// console.log("Full buffer: ", buffer.isFull()); // expected: false
// console.log("Buffer elements: ", buffer.size()); // expected: 0
// console.log("capacity: ", buffer.capacity()); // 4


// buffer.enqueue("F");
// buffer.enqueue("O");
// buffer.enqueue("U");
// buffer.enqueue("R");

// for (const element of buffer) {
//     console.log(element);
// } // expected output: F O U R

// console.log("Empty buffer: ", buffer.isEmpty()); // expected: false
// console.log("Full buffer: ", buffer.isFull()); // expected: true
// console.log("Buffer elements: ", buffer.size()); // expected: 4
// console.log("capacity: ", buffer.capacity()); // 4


// console.log("----- TESTED: isEmpty, isFull, size, capacity, enqueue, iterator -----");

// buffer.dequeue();
// buffer.dequeue();

// for (const element of buffer) {
//     console.log(element);
// } // expected output: null null U R

// console.log("----- TESTED: null null U R -----");

// buffer.enqueue("Q");

// for (const element of buffer) {
//     console.log(element);
// } // expected output: Q null U R

// console.log("----- TESTED: Q null U R -----");

// buffer.dequeue();
// buffer.dequeue();
// buffer.dequeue();

// for (const element of buffer) {
//     console.log(element);
// } // expected output: null null null null

// console.log("----- TESTED: null null null null -----");

// ---------------------------------------------------------- \\

buffer.enqueue("F");
buffer.enqueue("O");
buffer.enqueue("U");
buffer.enqueue("R");

buffer.dequeue()
buffer.dequeue()
buffer.dequeue()
buffer.enqueue("Q")

for (const element of buffer) {
    console.log(element);
} // expected output: Q null U R

// console.log(buffer.arraySize)
console.log("----- TESTED: Q null U R -----");
