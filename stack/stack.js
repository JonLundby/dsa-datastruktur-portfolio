class Node {
    constructor(data, prev = null) {
        this.data = data
        this.prev = prev
    }
}

export default class Stack {
    constructor() {
        this.tail = null;
    }

    push(data) {
        const newNode = new Node(data);

        if (this.tail === null) {
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    pop() {
        //code..
    }

    peek() {
        //code..
    }

    size() {
        //code..
    }

    get(index) {
        //code.. noget med while og current = current.next
    }
}
