import CircularBuffer from "./CircularBuffer.js";

const buffer = new CircularBuffer();

for (const element of buffer) {
    console.log(element);
} // expected output: no output since buffer is empty

console.log(" ----- TESTED: iterator return nothing(above this line) since the buffer is empty -----\n");

console.log("Empty buffer: ", buffer.isEmpty()); // expected: true
console.log("Full buffer: ", buffer.isFull()); // expected: false
console.log("Buffersize (elements enqueued): ", buffer.size()); // expected: 0
console.log("capacity: ", buffer.capacity()); // expected: 4

console.log(" ----- TESTED: isEmpty, isFull, size, capacity (when buffer is empty) -----\n");

buffer.enqueue("F");
buffer.enqueue("O");
buffer.enqueue("U");
buffer.enqueue("R");

console.log("Empty buffer: ", buffer.isEmpty()); // expected: false
console.log("Full buffer: ", buffer.isFull()); // expected: true
console.log("Buffersize (elements enqueued): ", buffer.size()); // expected: 4
console.log("capacity: ", buffer.capacity()); // expected: 4
console.log("peek: ", buffer.peek()); // expected: F

console.log("----- TESTED: isEmpty, isFull, size, capacity and peek (when buffer is full)-----\n");

for (const element of buffer) {
    console.log(element);
} // expected output: F O U R

console.log(" ----- TESTED: enqueue x4 and iterator return F O U R -----\n");

buffer.dequeue();
buffer.dequeue();
buffer.dequeue();
buffer.dequeue();

console.log("----- no iteration below this line -----");
for (const element of buffer) {
    console.log(element);
} // expected output: no output since buffer is empty
console.log("----- no iteration above this line -----\n");

console.log("Empty buffer: ", buffer.isEmpty()); // expected: true
console.log("Full buffer: ", buffer.isFull()); // expected: false
console.log("Buffersize (elements enqueued): ", buffer.size()); // expected: 0
console.log("capacity: ", buffer.capacity()); // expected: 4


console.log(" ----- TESTED: dequeue x4 and iterator return nothing since the buffer is empty -----\n");

buffer.enqueue("F");
buffer.enqueue("O");
buffer.dequeue();
buffer.enqueue("U");
buffer.enqueue("R");

for (const element of buffer) {
    console.log(element);
} // expected output: O U R
console.log("peek: ", buffer.peek()); // expected: O

console.log(" ----- TESTED: enqueue F O, dequeue F, enqueue U R, peek = 'O', and iterator return O U R -----\n");

buffer.enqueue("Q");

for (const element of buffer) {
    console.log(element);
} // expected output: O U R Q

console.log(" ----- TESTED: enqueue Q and iterator return O U R Q -----\n");

buffer.dequeue();

for (const element of buffer) {
    console.log(element);
} // expected output: U R Q

console.log(" ----- TESTED: dequeue and iterator return U R Q -----\n");

buffer.enqueue("U");
buffer.dequeue();
buffer.enqueue("A");

for (const element of buffer) {
    console.log(element);
} // expected output: R Q U A

console.log(" ----- TESTED: enqueue U, dequeue, enqueue A and iterator return R Q U A -----\n");

//////// Intentional errors below (comment in to test)////////
// buffer.dequeue();
// buffer.dequeue();
// buffer.dequeue();
// buffer.dequeue();
// buffer.dequeue();

// console.log(" ----- TESTED: dequeue x5 which should throw error: cant dequeue empty buffer -----\n");

// buffer.enqueue("F");
// buffer.enqueue("O");
// buffer.enqueue("U");
// buffer.enqueue("R");
// buffer.enqueue("Q");
// buffer.enqueue("U");
// buffer.enqueue("A");
// buffer.enqueue("D");

// console.log(" ----- TESTED: enqueue x8 which should throw error: cant enqueue full buffer -----\n");

const arr = ["F", "O", "U", "R", "Q", "U", "A", "D"];
const buffer2 = new CircularBuffer(4);
let i = 0;

testBuffer2();

function testBuffer2() {
    setInterval(() => {
        if (i === arr.length) {
            // quit program
            console.log("Program done!");
            process.exit(0); // exit program
        }
        if (!buffer2.isFull()) {
            buffer2.enqueue(arr[i]);
            i++;
        } else {
            buffer2.dequeue();
            buffer2.enqueue(arr[i]);
            i++;
        }

        let outputString = "";
        for (const element of buffer2) {
            outputString += element;
        }
        console.log(outputString);
    }, 1000);
}