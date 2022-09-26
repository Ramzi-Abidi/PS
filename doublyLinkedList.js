class LikedListDouble {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertTop(val) {
        let node = {
            val: val,
            next: null,
            prev: null
        };
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    insertTail(val) {
        let node = {
            val: val,
            next: null,
            prev: null
        };
        if (this.head === null) {
            this.head = node;
        }
        else {
            let curr = this.head;

            while (curr.next !== null) {
                curr = curr.next;
            }
            node.prev = curr;
            curr.next = node;
        }
        this.size++;
    }

    printLinkedList() {
        let curr = this.head;

        if (curr == null)
            console.log(`list is empty`);
        else
            while (curr != null) {
                console.log(curr.val);
                curr = curr.next;
            }
    }

    printReverse() {
        let curr = this.head;

        if (curr == null)
            console.log(`list is empty`);
        else
            while (curr.next != null) {
                curr = curr.next;
            };
        while (curr !== null) {
            log(curr.val);
            curr = curr.prev;
        }
    }

    insertAt(pos, val) {
        let curr = this.head;
        let nb = 0;
        
        let node = {
            val: val,
            next: null,
            prev: null,
        };
        
        if (pos === 0) {
            node.next = this.head;
            this.head.prev = node ;
            this.head = node ;
        }
        else {

            while (curr && nb !== pos - 1) {
                curr = curr.next;
                nb++;
            };
            
            //all these instructions changes the structure of LL
            node.next = curr.next;
            curr.next.prev = node;
            curr.next = node;
            node.prev = curr;
        }
    }
}


function log(ch) {
    console.log(ch);
};

let ll = new LikedListDouble();

/* ll.insertTop(5);
ll.insertTop(6);
ll.insertTop(7); */
ll.insertTail(1);
ll.insertTail(2);
ll.insertTail(3);
ll.insertTail(4);


ll.printLinkedList();

log("LL after insertion :") ;
ll.insertAt(0, 0);
ll.insertAt(3,"abc") ;
ll.printLinkedList();