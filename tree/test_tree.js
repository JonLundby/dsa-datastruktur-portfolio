import Node from "./tree.js";

// test instantiering a ny node uden children
let myNode = new Node("node1");
console.log(myNode);

// tjek first child     expected: null
console.log("first child null?: ", myNode.firstChild());

// tjek last child     expected: null
console.log("last child null?: ", myNode.lastChild());

// tjek has child nodes     expected: false
console.log("has child false?: ", myNode.hasChildNodes());

// tjek append child
let newNode2 = new Node("node2");
myNode.appendChild(newNode2);

let newNode3 = new Node("node3");
myNode.appendChild(newNode3);

let newNode4 = new Node("node4");
myNode.appendChild(newNode4);

// test om myNode har children og print af myNode   expected: true og Node1 med Node2-3-4 i childnodes array
console.log("has child null?: ", myNode.hasChildNodes());
console.log("Node with 3 children: ", myNode);

// test removChild newNode3     expected: Node1 med Node2 og Node4 som childnodes
myNode.removeChild(newNode3);
console.log("Node with 2 children (Node2 & Node4): ", myNode);

// test udskifting af nodes     expected: Node1 med Node5 i stedet for Node4.
let newNode5 = new Node("node5");
myNode.replaceChild(newNode5, newNode4);
console.log(myNode);
