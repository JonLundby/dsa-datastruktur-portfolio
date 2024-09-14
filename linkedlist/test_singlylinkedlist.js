import singlylinkedlist from "./singlylinkedlist.js";

const lst = new singlylinkedlist();

//// --- byg liste og tjek om *add* virker ---
for (let i = 1; i <= 5; i++) {
    lst.add("n" + i);
}

//// --- tjek om *iterator/for-of* virker ---
// for (const data of lst) {
//     console.log(data);
// }

//// --- tjek om *remove* virker ---
// console.log(lst.remove("n5"))

//// --- tjek om *getFirst* virker ---
// console.log(lst.getFirst());

//// --- tjek om *getLast* virker ---
// console.log(lst.getLast());

//// --- tjek om *get(index)* virker ---
// console.log(lst.get(0));

//// --- tjek om *getFirstNode* virker ---
// console.log(lst.getFirstNode());

//// --- tjek om *getNextNode* virker ---
// const node = lst.getFirstNode();
// const nextNode = lst.getNextNode(node);
// console.log("node next to first node should be(n4): " + nextNode.data);

//// --- tjek om *getLastNode* virker ---
// console.log(lst.getLastNode());

//// --- tjek om *getNodeWith* virker ---
// console.log(lst.getNodeWith("n30"));
// console.log(lst.getNodeWith("n3"));

//// --- tjek om *removeNode* virker ---
// const nodeToRemove = lst.getNodeWith("n2");
// console.log(nodeToRemove);
// lst.removeNode(nodeToRemove);
// console.log(lst.getNodeWith("n2"));

//// --- tjek *removeFirstNode* ---
// lst.removeFirstNode();

//// --- tjek *removeLastNode* ---
// lst.removeLastNode();

//// --- tjek *insertAfter* ---
// const node = lst.getNodeWith("n2");
// console.log(node);
// lst.insertAfter(node, "1.5");

//// --- tjek *clear* ---
lst.clear();
// lst.add("n1000");

console.log("-------printer liste--------");
lst.printList();
// --- tjek *size* ---
const sizeOfList = lst.size();
console.log("\nsize: " + sizeOfList);
