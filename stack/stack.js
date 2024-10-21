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
        let current = this.tail;
        let i = 0;
        let size = this.size()

        // check out of bounds
        if (index < 0 || index >= size) {
            throw new Error("Index is out of bounds!")
        }

        // iterate over size of stack untill index
        while (current) {
            if (index === i) {
                return current.data;
            }
            i++;
            current = current.prev;
        }

        return null;
    }
}
