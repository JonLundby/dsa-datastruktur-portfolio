import FixedStack from "./fixedstack.js";

const fStck = new FixedStack(4);

// fStck.pop() //expected: RangeError from staticArray -> empty stack

fStck.push("N1")
fStck.push("N2")
console.log(fStck) // expected:  [N1, N2]
console.log("size: ", fStck.size()) // expected: 2


fStck.pop();
console.log(fStck) // expected: [N1, null]

fStck.push("N3")
fStck.push("N4")
console.log(fStck) // expected: [N1, N2, N4]
console.log(fStck.peek()) // expected: N4
console.log("size: ", fStck.size()); // expected: 3

const Index0 = fStck.get(0)
console.log(Index0) // expected: N1
const Index2 = fStck.get(2)
console.log(Index2) // expected: N4

// fStck.get(10) //expected: RangeError from staticArray -> index out of bounds

fStck.push("N5")
console.log(fStck)
// fStck.push("N6") //expected: RangeError from staticArray -> stack full