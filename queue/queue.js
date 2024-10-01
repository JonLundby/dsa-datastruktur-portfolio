class Node {
    // next = null, hvis der ikke er nogen næste node
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    [Symbol.iterator]() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    const value = current.data
                    current = current.next;
                    return {value, done: false}
                } else {
                    return {done: true}
                }
            }
        }
    }

    // tilføjer en ny node, med reference til data-objektet, bagest i køen
    enqueue(data) {
        const newNode = new Node(data)

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }
    }

    // fjerner den node der ligger forrest i køen, og returnerer det referede data-objekt
    dequeue() {
        if (this.head === null) {
            return
        }

        const nodeToRemove = this.head.data

        if (this.head.next === null) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next;
        }

        return nodeToRemove;
    }
    
    // returnerer data-objektet der ligger forrest i køen, uden at fjerne det
    peek() {
        return this.head ? this.head.data : null;
    }

    // fortæller hvor mange elementer der er i køen
    size() {
        let current = this.head;
        let count = 0;

        while (current !== null) {
            current = current.next;
            count++;
        }

        return count;
   }

    // finder og returnerer elementet på plads ‘index’, hvor 0 er det forreste, uden at fjerne noget
    get(index) {
        if (typeof index === "number" && index < this.size() && index >= 0) {
            let current = this.head;
            let count = 0;

            while (index !== count) {
                current = current.next;
                count++;
            }

            return current
        } else {
            return
        }
    }
}
