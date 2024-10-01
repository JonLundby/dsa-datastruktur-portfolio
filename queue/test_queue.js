import Queue from "./queue.js";

const q = new Queue();

console.log("Queue is empty(null): ", q.peek())

q.enqueue("n1");
q.enqueue("n2");
q.enqueue("n3");
q.enqueue("n4");

console.log("-------1-2-3-4-enqueued-------");
console.log("HEAD: ", q.head);
console.log("TAIL: ", q.tail);
console.log("PEEK: ", q.peek());

console.log("SIZE: ", q.size());

const nodeAtIndex = q.get(1);
console.log("NodeAtIndex: ", nodeAtIndex)

q.dequeue();
q.dequeue();
q.dequeue();

console.log("-------1-2-3-dequeued-------");
console.log("HEAD: ", q.head);
console.log("TAIL: ", q.tail);
console.log("SIZE: ", q.size());

q.enqueue("n5")
q.enqueue("n6")
q.enqueue("n7")
q.enqueue("n8")
q.enqueue("n9")

for (const node of q) {
    console.log("Data is: ", node)
}

console.log("------------------")
console.log("HEAD: ", q.head);
const headNodeRemoved = q.dequeue();
console.log("Data dequeued: ", headNodeRemoved)
console.log("HEAD: ", q.head);