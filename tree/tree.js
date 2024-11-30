export default class Node {
    constructor(value) {
        this.value = value;
        this.parentNode = null;
        this.childNodes = [];
    }

    firstChild() {
        return this.childNodes.length > 0 ? this.childNodes[0] : null;
    }

    lastChild() {
        return this.childNodes.length > 0 ? this.childNodes[this.childNodes.length - 1] : null;
    }

    hasChildNodes() {
        return this.childNodes.length > 0;
    }

    appendChild(child) {
        child.parentNode = this; // sætter childs parent til at være den node som holder på listen af childNodes hvori child bliver indsat
        this.childNodes.push(child); // indsætter child på childNodeListen
    }

    removeChild(child) {
        // finder index af child i childNodes
        const childIndex = this.childNodes.indexOf(child);

        // tjek index bounds
        if (childIndex > -1 && childIndex < this.childNodes.length - 1) {
            child.parentNode = null; // oprydning / fjerner parentNode fra child
            this.childNodes.splice(childIndex, 1); // fjerner 1 fra childIndex plads
        } else {
            throw new Error("child does not exist");
        }
    }

    replaceChild(newChild, oldChild) {
        const oldChildIndex = this.childNodes.indexOf(oldChild);

        // indexOf returnerer -1 hvis index ikke er fundet. Med andre ord er -1 = out of index bounds
        if (oldChildIndex !== -1) {
            newChild.parentNode = this;
            this.childNodes[oldChildIndex] = newChild;
            oldChild.parentNode = null;
        } else {
            throw new Error("Index out of bounds, children was not replaced");
        }
    }
}

export class Tree {
    constructor(node) {
        this.root = node || null;
    }

    addValue(value) {
        const newNode = new Node(value);

        // i tilfælde af et tomt træ sætte den nye node som root
        if (this.root === null) {
            this.root = newNode;
        } else {
            const queue = [this.root]; // en kø initialiseres fra roden af træet

            while (queue.length > 0) {
                let currentParent = queue[0]; // første element i køen er currentParent
                queue.shift(); // første element fra køen fjernes

                // hvis currentParent har mindre en 4 children så kan den ny node tilføjes
                // altså bliver der her sat en begrænsning på hvor mange children en parentNode kan have, her 3
                if (currentParent.childNodes.length < 4) {
                    currentParent.appendChild(newNode);
                    return;
                }

                // pusher resten af currentParents children til køen
                queue.push(...currentParent.childNodes);
            }
        }
    }

    findValue(value) {
        if (!this.root) {
            console.log("Tree is empty");
            return null;
        } else {
            const queue = [this.root];

            while (queue.length > 0) {
                let currentNode = queue.shift();

                if (currentNode.value === value) {
                    return currentNode; // returnerer den første node der matcher value
                }

                queue.push(...currentNode.childNodes);
            }

            console.log("No node matches the value");
            return null;
        }
    }

    removeValue(value) {
        // finder noden der skal slettes
        const nodeToRemove = this.findValue(value);

        // tjekker om noden eksisterer
        if (!nodeToRemove) {
            throw new Error("Could not find value to remove");
        }

        // tjekker om noden der skal fjernes er root noden
        if (nodeToRemove === this.root) {
            this.root = null;
            console.log("root node removed");

            return; // hvis dette er tilfældet return tidligt
        }

        // efter de forrige tjek kan parentnoden til den node der skal fjernes findes
        const parentNode = nodeToRemove.parentNode;

        // ekstra tjek om parent noden er falsy
        if (!parentNode) {
            throw new Error("Node has no parent, tree structure might be invalid");
        }

        // hvis parentNode ikke er falsy så kan den bruges som node til at kalde removeChild med den value der skal fjernes
        console.log("node removed");
        parentNode.removeChild(nodeToRemove);
    }

    dump() {
        function printNode(node, depth) {
            // for at skabe en træ-agtig struktur i dump printet så repeates "--" "depth" antal gange og konkatineres med nodens value
            console.log("depth -" + "--".repeat(depth) + "> " + node.value);

            // hvert child af noden fra det oprindelige printNode kald bliver brugt som argument i et rekursivt kald af printNode
            for (let child of node.childNodes) {
                printNode(child, depth + 1);
            }
        }

        if (this.root === null) {
            console.log("The tree is empty");
        } else {
            printNode(this.root, 0);
        }
    }
}
