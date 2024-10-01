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

    // dequeue() - fjerner den node der ligger forrest i køen, og returnerer det referede data-objekt
    
// peek() - returnerer data-objektet der ligger forrest i køen, uden at fjerne det
// size() - fortæller hvor mange elementer der er i køen
// get( index ) - finder og returnerer elementet på plads ‘index’, hvor 0 er det forreste, uden at fjerne noget
}
