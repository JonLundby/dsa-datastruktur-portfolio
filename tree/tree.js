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

    // - `addValue( value )` - der opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
    addValue(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            //
            // this.root.hasChildNodes
        }
    }

    // - `findValue( value )` - der leder efter den givne value i træet, og returnerer den (første) Node der har den
    findValue(value) {}

    // - `removeValue( value )` - der finder og fjerner Noden med den givne value fra træet
    removeValue() {}

    //     - `dump()` - der udskriver hele træet i consollen.
    dump() {}
}
