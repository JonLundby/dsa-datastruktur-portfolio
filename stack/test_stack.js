import Stack from "./stack.js";

const stck = new Stack();

stck.push("N1");
stck.push("N2");
stck.push("N3");

console.log(stck); // expected: N3 -> N2 -> N1 

stck.pop();

console.log(stck); // expected: N2 -> N1 

console.log(stck.peek()); // expected: N2

stck.push("N3")
stck.push("N4")
stck.push("N5")
stck.pop()

console.log(stck.size()); // expected: 4

console.log(stck)
const nodeAtIndex = stck.get(3)
console.log("Node at index 3: ", nodeAtIndex) // expected: N1