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
        const nodeToPop = this.tail;

        if (this.tail === null) {
            throw new Error("Stack is empty, nothing to pop!");
        } else if (this.tail.prev === null) {
            this.tail = null
            return nodeToPop.data;
        } else {
            this.tail = this.tail.prev;
            return nodeToPop.data;
        }
    }

    peek() {
        if (this.tail === null) {
            throw new Error("Stack is empty, nothing to peek!");
        } else {
            return this.tail.data;
        }
    }

    size() {
        let current = this.tail;
        let count = 0;

        while (current) {
            count++;
            current = current.prev;
        }

        return count
    }

    get(index) {
        //code.. noget med while og current = current.next
    }
}
