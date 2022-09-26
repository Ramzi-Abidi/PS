class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addTop(val) {
        let node = {
            val: val,
            next: null
        };

        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    printLinkedList() {
        let curr = this.head;

        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        };
    }

    //O(n)
    middleOfLL() {
        let curr = this.head;
        let nb = 0;

        while (curr !== null) {
            curr = curr.next;
            nb++;
        }

        nb = Math.floor(nb / 2);
        curr = this.head;

        while (nb !== 0) {
            curr = curr.next;
            nb--;
        };
        return curr ;
    }

    // middleOfLL1() {}  : whithout calculating length of LL
    middleOfLL1() {
        let slow = this.head ;
        let fast = this.head ;
        
        while(fast !== null && fast.next !== null) {
            slow = slow.next ;
            fast = fast.next.next ;
        } ;
        return slow ;
    }
}

ll = new LinkedList();

ll.addTop(5);
ll.addTop(6);
ll.addTop(7);
ll.addTop(8);
ll.addTop(9);

ll.printLinkedList();

console.log(ll.middleOfLL1()) ;