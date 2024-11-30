import Node from "./tree.js";
import { Tree } from "./tree.js";

// // test instantiering af ny node uden children
// let myNode = new Node("node1");
// console.log(myNode);

// // tjek first child
// console.log("first child null?: ", myNode.firstChild()); // expected: null;

// // tjek last child
// console.log("last child null?: ", myNode.lastChild()); // expected: null

// // tjek has child nodes
// console.log("has child false?: ", myNode.hasChildNodes()); // expected: false

// // tjek append child
// let newNode2 = new Node("node2");
// myNode.appendChild(newNode2);

// let newNode3 = new Node("node3");
// myNode.appendChild(newNode3);

// let newNode4 = new Node("node4");
// myNode.appendChild(newNode4);

// // test om myNode har children og print af myNode   expected: true og Node1 med Node2-3-4 i childnodes array
// console.log("has child true?: ", myNode.hasChildNodes()); // expected: true
// console.log("Node with 3 children: ", myNode);

// // test removChild newNode3     expected: Node1 med Node2 og Node4 som childnodes
// myNode.removeChild(newNode3);
// console.log("Node with 2 children (Node2 & Node4): ", myNode);

// // test udskifting af nodes
// let newNode5 = new Node("node5");
// myNode.replaceChild(newNode5, newNode4);
// console.log(myNode); // expected: Node1 med Node5 i stedet for Node4.

let myTree = new Tree();
console.log("Empty tree: ", myTree);
console.log("------------ tree dump ------------");
myTree.dump();

myTree.addValue("Tree node 1");
console.log("Tree with only root: ");
myTree.dump();

myTree.addValue("Tree node 2");
console.log("Tree with root and one child: ");
myTree.dump();

myTree.addValue("Tree node 3");
myTree.addValue("Tree node 4");
myTree.addValue("Tree node 5");
myTree.addValue("Tree node 6");
myTree.addValue("Tree node 7");
myTree.addValue("Tree node 8");
myTree.addValue("Tree node 9");
myTree.addValue("Tree node 10");
console.log("------------ new tree dump ------------");
myTree.dump();

// test af ikke eksisterende værdi
const foundNonExistingValue = myTree.findValue("Tree node 100");
console.log("Found value: ", foundNonExistingValue); // expected: "No node matches the value" / null

// test af tomt træ
const myEmptyTree = new Tree();
const foundValueInEmptyTree = myEmptyTree.findValue("True node 100.¤¤");
console.log("Found value: ", foundValueInEmptyTree); // expected: "Tree is empty" / null

// test af eksisterende værdi i træet
const foundValue = myTree.findValue("Tree node 10");
console.log("Found value: ", foundValue); // expected: node with value "Tree node 10"

myTree.addValue("Tree node 11");
console.log("------------ new tree dump (removed node(3) should and children(10, 11) should be missing)------------");
myTree.removeValue("Tree node 3");
myTree.dump();
