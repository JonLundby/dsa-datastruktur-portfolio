import doublylinkedlist from "./doublylinkedlist.js";

const lst = new doublylinkedlist();

// tilføj noder til sidst i listen
for (let i = 1; i < 5; i++) {
    lst.addFirst("n" + i);
}

//// --- tjek om *addLast(data)* virker ---
// lst.addLast("n0");

//// --- tjek om *addFirst(data)* virker ---
// lst.addFirst("n5");

//// --- tjek om *get(index)* virker ---
// console.log(lst.get(2));

//// --- tjek om *indexOf(data)* virker ---
// console.log(lst.indexOf("n3"))

//// --- tjek om *insertAfter(index, data)* virker ---
// lst.insertAfter(0, "n3.5");

//// --- tjek om *insertBefore(index, data)* virker ---
// lst.insertBefore(0, "n4.5");

//// --- tjek om *first()* virker ---
// console.log(lst.first());

// lst.remove("n3");
// lst.remove("n1");
// lst.remove("n2.5");

//// --- print af liste samt listens længde ---
console.log("-------printer liste--------");
lst.printList();
const sizeOfList = lst.size();
console.log("size of list: " + sizeOfList);