import Queue from "./queue.js";

const q = new Queue();

q.enqueue("n1");
q.enqueue("n2");
q.enqueue("n3");
q.enqueue("n4");

console.log(q.head);
console.log(q.tail);

