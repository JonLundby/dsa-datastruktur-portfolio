class Node {
    constructor(data, next = null) {
        // next = null, hvis der ikke er nogen næste node
        // modtager data og next (en pointer der peger på næste node)
        this.data = data; // en property der holder på et object, fx enemy object
        this.next = next; // en reference til næste node i en linkedList
    }
}

export default class singlylinkedlist {
    // Constructor
    constructor() {
        this.head = null; // Den første node
    }

    // add( data ) - der opretter en ny node, med link til data-objektet, og tilføjer den til listen
    add(data) {
        //add modtager data objekt
        this.head = new Node(data, this.head); // listens head er en ny node og peger på head som første gang er null og herefter peger den på den foregående node
    }

    // remove( data ) - der finder en node med link til dét data-objekt, og fjerner noden.
    remove(data) {
        const node = this.getNodeWith(data);
        if (node) {
            this.removeNode(node);
            return data;
        } else {
            return null;
        }

        // // hvis head er null så er listen tom
        // if (this.head === null) {
        //     return null; // hvis listen er tom returnes null
        // }

        // // hvis listens første head er det samme som data
        // if (this.head.data === data) {
        //     this.head = this.head.next; // så skal listens head sættes til den næste node således går den første head tabt(bliver removed)
        //     return data;
        // }

        // let current = this.head; // holder på den node vi kigger på (til at starte med den første node i listen)
        // let previous = null; // holder på den sidste node vi kiggede på

        // // så længe current (head) er noget
        // while (current !== null) {
        //     //hvis current (head) er det samme som data
        //     if (current.data === data) {
        //         previous.next = current.next; // så sættes previous node til at pege på noden som current noden peger på (altså springes current node over fordi den skal removes)
        //         return data; // returner det fundne og fjernede object
        //     }
        //     previous = current; // den node vi har kigget på, og som ikke var den der skulle removes, bliver sat til previous
        //     current = current.next; // current node som vi har kigget på bliver udskiftet med den næste som den selv peger på
        // }
        // return null;
    }

    // getFirst() - der returnerer data i den første node i listen
    getFirst() {
        const node = this.getFirstNode();
        return node ? node.data : null;
        // if (this.head.data !== null) {
        //     return this.head.data;
        // } else {
        //     return null;
        // }
    }
    // getLast() - der returnerer data i den sidste node i listen (længst væk fra head)
    getLast() {
        const node = this.getLastNode();
        return node ? node.data : null;
        // hvis head er null så er listen tom og null returneres
        // if (this.head === null) {
        //     console.log("listen er tom");
        //     return null;
        // }

        // // hvis head ikke peger på noget så er der kun en node og den returneres
        // if (this.head.next === null) {
        //     return this.head.data;
        // }

        // let current = this.head;

        // // så længe current (head) peger på noget sættes current til at være det den peger på
        // while (current.next !== null) {
        //     current = current.next;

        //     // hvis current lige pludselig ikke peger på noget så må det være den sidste og den returneres
        //     if (current.next === null) {
        //         return current.data;
        //     }
        // }
    }

    // get( index ) - der returnerer data-objektet på det pågældende index i listen.
    get(index) {
        // tjek om index er inden for længde af listen
        if (index < 0 || index >= this.size()) {
            console.log("index out of bounds");
            return null;
        }

        // første head node gemmes i variabel
        let current = this.head;

        // iteration indtil index tallet
        for (let i = 0; i < index; i++) {
            // current node bliver til næste indtil index er nået
            current = current.next;
        }
        return current.data;
    }

    // getFirstNode() - der returnerer den første node i listen
    getFirstNode() {
        // hvis listen er tom returneres null ellers returneres head
        if (this.head === null) {
            return null;
        } else {
            return this.head;
        }
    }

    // getNextNode( node ) - der returnerer noden efter denne (eller null, hvis der ikke er nogen)
    getNextNode(node) {
        let current = this.head;

        // Gennemløb listen for at finde den angivne node
        while (current) {
            // Når noden findes, returneres dens 'next'
            if (current === node) {
                return current.next;
            }
            current = current.next;
        }

        // Returner null, hvis noden ikke findes, eller hvis der ikke er en næste node
        return null;
    }

    // getLastNode() - der returnerer den sidste node i listen
    getLastNode() {
        // hvis listen er tom returneres null
        if (this.head === null) {
            return null;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    // getNodeWith( data ) - der returnerer den node der linker til dette data-objekt
    getNodeWith(data) {
        let current = this.head;

        // Gennemløb listen for at finde den angivne node
        while (current) {
            if (current.data === data) {
                return current;
            }
            // Når noden findes, returneres den
            current = current.next;
        }
        // Returner null, hvis noden ikke findes
        return null;
    }

    // removeNode( node ) - der fjerner dén node fra listen
    removeNode(node) {
        // Hvis listen er tom, returneres null
        if (this.head === null) {
            return null;
        }

        // Hvis noden der skal fjernes er head
        if (this.head === node) {
            this.head = this.head.next; // så skal head sættes til at være den næste node og hvis den er null så bliver listen tom
            return;
        }

        let current = this.head;
        let previous = null; // previous node holder på den sidste node vi har kigget på, dette er nødvendigt i singly linked list som ikke har en prev reference

        // Så længe noden der kigges på er noget
        while (current !== null) {
            // Hvis noden matcher den der skal fjernes
            if (current === node) {
                // så skal previous node pege på næste node efter den der fjernes
                previous.next = current.next;
                return;
            }
            previous = current; // den node vi har kigget på bliver sat til previous
            current = current.next; // den næste der skal kigges på
        }
    }

    // removeFirstNode() - der fjerner den første node fra listen
    removeFirstNode() {
        if (this.head === null) {
            return null;
        } else {
            this.head = this.head.next;
        }
    }

    // removeLastNode() - der fjerner den sidste node fra listen
    removeLastNode() {
        // hvis listen er tom
        if (this.head === null) {
            return null;
        }

        //hvis listen er 1 så skal head fjernes
        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    // insertAfter( node ) - der indsætter en ny node efter den pågældende
    insertAfter(node, data) {
        // hvis noden der skal indsættes noget efter er null så ved vi ikke hvor det skal indsættes
        if (node === null) {
            return;
        }

        const newNode = new Node(data); // den nye node med data
        newNode.next = node.next; // den nye node skal pege på den node som den node der skal indsættes efter peger på
        node.next = newNode; // den node der skal indsættes efter skal pege på den nye node
    }

    // clear() - der fjerner alle nodes fra listen, og sørger for at den er tom.
    clear() {
        this.head = null;
    }

    // size() - der returnerer antallet af nodes i listen
    size() {
        let current = this.head;

        for (let i = 0; current !== null; i++) {
            current = current.next;
            if (current === null) {
                return i + 1;
            }
        }
    }

    printList() {
        let current = this.head;

        while (current !== null) {
            if (current.data === null) {
                console.log("No data in node");
            } else {
                console.log(current.data); // Udskriv data for hver node
            }
            current = current.next; // Gå videre til næste node
        }
    }
}
