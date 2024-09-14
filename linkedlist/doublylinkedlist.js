class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

export default class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // addLast( data ) - tilføjer et element til slutningen af listen
    addLast(data) {
        const newNode = new Node(data);

        //hvis listen er tom sættes både head og tail til newNode da denne node er den eneste
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // sætter den nuværende tail til at pege på newNode som next
            newNode.prev = this.tail; // sætter newNode til at pege på den nuværen tail som prev
            this.tail = newNode; // til sidst sættes tail til at være newNode
        }
    }

    // addFirst( data ) - tilføjer et element til begyndelsen af listen
    addFirst(data) {
        const newNode = new Node(data);

        //hvis head er null så er listen tom og newNode sættes til head og tail
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // get( index ) - returnerer elementet på plads nummer *index*
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

    // indexOf( data ) - finder plads nummer for det angivne element (payload)
    indexOf(data) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1; // hvis data ikke findes i listen
    }

    // insertAfter( index, data ) - indsætter et nyt element efter plads nummer *index*
    insertAfter(index, data) {
        // tjek om index er gyldigt / indenfor listens rækkevidde
        if (index < 0 || index >= this.size()) {
            console.log("index out of bounds");
            return null;
        }

        const newNode = new Node(data);
        let current = this.head;

        // gennemgå listens noder indtil index findes. Når index er funder så er current node den node hvor newNode skal indsættes efter
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.next = current.next; // newNode "overtager" current's next node
        newNode.prev = current; // newNode's prev sættes til current, altså den node som newNode skal indsættes efter

        // Hvis current peger på en next...
        if (current.next) {
            current.next.prev = newNode; // så skal current's next node have newNode som prev
        } else {
            this.tail = newNode; // Hvis current node tilgengæld var den sidste node så skal den være den nye tail
        }

        current.next = newNode; // til sidst kan current's next opdateres til at pege på newNode
    }

    // insertBefore( index, data ) - indsætter et nyt element før plads nummer *index*
    insertBefore(index, data) {
        // tjek om index er gyldigt / indenfor listens rækkevidde
        if (index < 0 || index >= this.size()) {
            console.log("index out of bounds");
            return null;
        }

        const newNode = new Node(data);

        // I tilfælde af at newNode skal indsættes før index 0
        if (index === 0) {
            newNode.next = this.head; // newNode skal pege på head som var den første node
            if (this.head) {
                this.head.prev = newNode; // hvis head var en node skal newNode pege på den som next
            }
            this.head = newNode; // newNode bliver nu den nye head
            if (this.size() === 0) {
                this.tail = newNode; // hvis listen var tom så skal newNode også være head
            }
            return;
        }

        let current = this.head;

        // gennemgå listens noder indtil index findes. Når index er funder så er current node den node hvor newNode skal indsættes før
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.next = current; // newNode skal pege på current som next da den indsættes før
        newNode.prev = current.prev; // newNode indsættes før current og overtager derfor current's prev

        // Hvis current peger på en prev...
        if (current.prev) {
            current.prev.next = newNode; // så skal current's next node have newNode som prev
        }

        current.prev = newNode; // til sidst kan current's prev opdateres til at pege på newNode
    }

    // first() - returnerer det første element i listen
    first() {
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }

    // last() - returnerer det sidste element i listen
    last() {
        if (this.tail === null) {
            return null;
        }
        return this.tail.data;
    }

    // remove( data ) - fjerner elementet fra listen (hvis det altså var der)
    remove(data) {
        // I tilfælde af at listen er tom er der ikke noget at fjerne
        if (this.head === null) {
            return false;
        }

        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                // Hvis det er tilfældet at head node matcher og skal fjernes
                if (current === this.head) {
                    this.head = current.next; // så skal den næste node være det nye head
                    // hvis det nye head ikke er null (og det kunne den være hvis listen kun havde eén node)
                    if (this.head !== null) {
                        this.head.prev = null; // så skal det nye head pege på null som prev
                    }
                }

                // Hvis noden der skal fjernes er tail
                if (current === this.tail) {
                    this.tail = current.prev; // så skal tail sættes til current's prev
                    //hvis den nye tail ikke er null (og det kunne den være hvis listen kun havde eén node)
                    if (this.tail !== null) {
                        this.tail.next = null; // så skal den nye tail pege på null som next
                    }
                }

                // Hvis noden der skal fjernes er i midten af listen
                if (current.prev !== null) {
                    current.prev.next = current.next; // opdater prev node's next
                }
                if (current.next !== null) {
                    current.next.prev = current.prev; // opdater next node's prev
                }

                return true; // Return true indicating the node was removed
            }
            current = current.next; // while loop ender her og går videre til næste node som så bliver tjekket for om den matcher med data
        }

        return false; // ingen match blev fundet og data kan derfor ikke slettes
    }

    // removeIndex( index ) - fjerner elementet på det pågældende *index*
    removeIndex(index) {
        //hvis listen er tom...
        if (this.head === null) {
            return null;
        }
    }

    // removeFirst() - fjerner det første element i listen - og returnerer elementet
    removeFirst() {
        // hvis listen er tom
        if (this.head === null) {
            return null;
        }

        const data = this.head.data;
        this.head = this.head.next;

        // Hvis listen kun havde én node så skal tail være null således listen bliver tom
        if (this.head === null) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        return data;
    }

    // removeLast() - fjerner det sidste element i listen - og returnerer elementet
    removeLast() {
        // hvis listen er tom
        if (this.head === null) {
            return null;
        }

        const data = this.tail.data;

        // hvis head og tail er ens
        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        return data;
    }

    // addNodeLast( newNode ) - tilføjer en ny node til slutningen af listen
    addNodeLast(newNode) {
        // Hvis listen er tom så skal både head og tail være newNode
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Hvis listen ikke er tom så skal tail's next være newNode og newNode's prev skal være tail
            newNode.prev = this.tail; // newNode's prev skal være tail
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = null;
        }
    }

    // addNodeFirst( newNode ) - tilføjer en ny node i starten af listen
    addNodeFirst(newNode) {
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // insertAfterNode( newNode, existingNode ) - indsætter en ny node efter en eksisterende
    insertAfterNode(newNode, existingNode) {
        // I tilfælde af at existingNode er null så er der ikke noget at indsætte efter
        if (existingNode === null) {
            return;
        }
        // i tilfælde af at existingNode er tail så skal newNode være tail
        if (existingNode === this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            // this.tail.next = null;
        } else {
            // i tilfælde af at existingNode er en node i midten eller starten af listen
            newNode.next = existingNode.next;
            newNode.prev = existingNode;
            existingNode.next.prev = newNode;
            existingNode.next = newNode;
        }
    }

    // insertBeforeNode( newNode, existingNode ) - indsætter en ny node før en eksisterende
    insertBeforeNode(newNode, existingNode) {
        // I tilfælde af at existingNode er null så er der ikke noget at indsætte efter
        if (existingNode === null) {
            return;
        }
        //hvis existing node er den første (head)
        if (existingNode === this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            // ellers skal noden indsættes mellem to andre noder
            newNode.next = existingNode;
            newNode.prev = existingNode.prev;
            existingNode.prev.next = newNode;
            existingNode.prev = newNode;
        }
    }

    // removeNode( existingNode ) - fjerner en eksisterende node fra listen
    removeNode(existingNode) {
        // I tilfælde af at existingNode er null så er der ikke noget at fjerne
        if (existingNode === null) {
            return;
        }

        // Hvis existingNode er head
        if (existingNode === this.head) {
            console.log("removing head");
            this.head = this.head.next;
            this.head.prev = null;
        } else if (existingNode === this.tail) {
            // Hvis existingNode er tail
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            // Hvis existingNode er en node i midten af listen
            existingNode.prev.next = existingNode.next;
            existingNode.next.prev = existingNode.prev;
        }
    }

    // nodeAt( index ) - returnerer noden på plads nummer *index*
    nodeAt(index) {
        // tjek om index er inden for listens rækkevidde
        if (index < 0 || index < this.size) {
            return null;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    // swapNodes( nodeA, nodeB ) - bytter om på to nodes pladser i listen
    swapNodes(nodeA, nodeB) {
        // get index og byt om hvis A ligger efter B
        const aIndex = this.indexOf(nodeA.data);
        const bIndex = this.indexOf(nodeB.data);
        if (aIndex > bIndex) {
            const nodeATemp = nodeA;
            nodeA = nodeB;
            nodeB = nodeATemp;
        }

        // I tilfælde af swap med A som head
        // forbind ydernodes med A og B, altså det nodes der ligger før A og efter B (null ligger før A og skal/kan ikke pege på B)
        if (nodeA === this.head) {
            nodeB.next.prev = nodeA;
            // forbind A og B med ydernodes
            nodeA.next = nodeB.next;
            nodeB.prev = null;
            // forbind A og B
            nodeA.prev = nodeB;
            nodeB.next = nodeA;
            this.head = nodeB;
        }
        // I tilfælde af swap med B som tail
        // forbind ydernodes med A og B, altså det nodes der ligger før A og efter B (null ligger før A og skal/kan ikke pege på B)
        else if (nodeB === this.tail) {
            nodeA.prev.next = nodeB;
            // forbind B og A med ydernodes
            nodeB.prev = nodeA.prev;
            nodeA.next = null;
            // forbind A og B
            nodeA.prev = nodeB;
            nodeB.next = nodeA;
            this.tail = nodeA;
        } else {
            // I tilfælde af swap i midten
            // forbind ydernodes med A og B, altså det nodes der ligger før A og efter B
            nodeA.prev.next = nodeB;
            nodeB.next.prev = nodeA;
            // forbind A og B med ydernodes
            nodeA.next = nodeB.next;
            nodeB.prev = nodeA.prev;
            // forbind A og B
            nodeB.next = nodeA;
            nodeA.prev = nodeB;
        }
    }

    // clear() - fjerner alle elementer fra listen
    clear() {
        this.head = null;
        this.tail = null;
    }

    // size() - returnerer antallet af nodes i listen
    size() {
        let current = this.head;
        let count = 0;

        while (current) {
            current = current.next;
            count++;
        }
        return count;
    }

    // dumpList( ) - udskriver hele listen i console,
    dumpList() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            if (current.data === null) {
                console.log("No data in node");
            } else {
                console.log(current.data); // Udskriv data for hver node
            }
            current = current.next; // Gå videre til næste node
        }
    }
}
