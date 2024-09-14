import doublylinkedlist from "./doublylinkedlist.js";

const lst = new doublylinkedlist();

// tilføj noder til sidst i listen
for (let i = 5; i > 0; i--) {
    lst.addFirst("n" + i);
}

//// --- *addLast(data)* ---
// lst.addLast("n0");

//// --- *addFirst(data)* ---
// lst.addFirst("n5");

//// --- *get(index)* ---
// console.log(lst.get(2));

//// --- *indexOf(data)* ---
// console.log(lst.indexOf("n3"))

//// --- *insertAfter(index, data)* ---
// lst.insertAfter(0, "n3.5");

//// --- *insertBefore(index, data)* ---
// lst.insertBefore(0, "n4.5");

//// --- *first()* ---
// console.log(lst.first());

//// --- *node(index)* ---
// console.log(lst.node(4))

//// --- *removeFirst()* ---
// lst.removeFirst();

//// --- *removeLast()* ---
// lst.removeLast();

//// --- *addNodeLast* ---
// const newNode = { data: "n000011" };
// lst.addNodeLast(newNode);

////--- *addNodeFirst* ---
// const newNode = { data: "n1543" };
// lst.addNodeFirst(newNode)

//// --- *insertNodeAfter(newNode, existingNode)* ---
// const newNode1 = { data: "n4.5" };
// const newNode2 = { data: "n2.5" };
// const newNode3 = { data: "n0.5" };
// const firstNode = lst.nodeAt(0);
// const existingNode = lst.nodeAt(2);
// const lastNode = lst.nodeAt(lst.size() - 1);
// lst.insertAfterNode(newNode1, firstNode);
// lst.insertAfterNode(newNode2, existingNode);
// lst.insertAfterNode(newNode3, lastNode);

//// --- *insertBeforeNode(newNode, existingNode)* ---
// const newNode1 = { data: "n5.5" };
// const newNode2 = { data: "n3.5" };
// const newNode3 = { data: "n0.5" };
// const firstNode = lst.nodeAt(0);
// const existingNode = lst.nodeAt(2);
// const lastNode = lst.nodeAt(lst.size() - 1);
// lst.insertBeforeNode(newNode1, firstNode);
// lst.insertBeforeNode(newNode2, existingNode);
// lst.insertBeforeNode(newNode3, lastNode);

//// --- *removeNode* ---
// const nodeToRemove = lst.nodeAt(0);
// lst.removeNode(nodeToRemove);

//// --- *nodeAt* ---
// const node = lst.nodeAt(0);
// console.log(node.data);

//// --- *swapNodes* ---
//// case head
// const node1 = lst.nodeAt(0);
// const node2 = lst.nodeAt(1);
// lst.swapNodes(node1, node2);
//// case mid
// const node1 = lst.nodeAt(1);
// const node2 = lst.nodeAt(2);
// lst.swapNodes(node1, node2);
//// case tail
// const node1 = lst.nodeAt(3);
// const node2 = lst.nodeAt(4);
// lst.swapNodes(node1, node2);

//// SWAPPED case head
// const node1 = lst.nodeAt(1);
// const node2 = lst.nodeAt(0);
// lst.swapNodes(node1, node2);
//// SWAPPED case mid
// const node1 = lst.nodeAt(2);
// const node2 = lst.nodeAt(1);
// lst.swapNodes(node1, node2);
//// SWAPPED case tail
// const node1 = lst.nodeAt(4);
// const node2 = lst.nodeAt(3);
// lst.swapNodes(node1, node2);

//// --- *clear()* ---
// lst.clear();

// --- *dump()* ---
lst.dumpList();

// lst.remove("n3");
// lst.remove("n1");
// lst.remove("n2.5");

//// --- print af liste samt listens længde ---
console.log("-------printer liste--------");
lst.printList();
const sizeOfList = lst.size();
console.log("size of list: " + sizeOfList);