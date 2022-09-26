/* class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};
 */

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insertHead method :
    insertTop(val) {
        //creating a new Node :
        const obj = {
            val: val,
            next: null
        };

        // in case the LinkedList is empty 
        if (this.size === 0) {              //or this.head == null
            this.head = obj;
        }
        else {
            obj.next = this.head;
            this.head = obj;
        }

        this.size++;
    }

    insertQueue(val) {
        const obj = {
            val: val,
            next: null
        };

        if (this.head === null) {
            this.head = obj;
        }
        else {
            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            curr.next = obj;
        }
        this.size++;
    }

    //printing the LinkedList :
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

    //inserting at index pos
    insertAt(pos, obj) {

        if (pos === 0) {
            obj.next = this.head;
            this.head = obj;
        }
        else {
            let i = 0;
            let curr = this.head;

            while (curr != null && i < pos - 1) {
                curr = curr.next;
                i++;
            }
            if (curr != null) {
                obj.next = curr.next;
                curr.next = obj;
            }
        }
        this.size++;
    }

    //deleting from the LinkedList :
    delete(pos) {
        let curr = this.head;
        let nb = 0;

        if (pos === 0) {
            curr = curr.next;       // Reassign => doesn't change the structure of the LL
            this.head = curr;
        }

        else {
            while (curr !== null && nb !== pos - 1) {
                curr = curr.next;       // Reassign => doesn't change the structure of LL
                nb++;
            }
            curr.next = curr.next.next; // changes the structure of the LL
        }

        this.size--;
    }

    //O(n)
    middleNode() {
        let curr = this.head;
        let nb = 0;
        let n = Math.floor((this.size / 2));

        while (curr !== null && nb < n) {
            curr = curr.next;
            nb++;
        }

        return curr;
    }

    insertAtRec(pos, val, nb, curr) {
        let curr1 = curr;

        let node = {
            val: val,
            next: null
        };

        if (pos === 0) {
            node.next = this.head;
            this.head = node;
        }
        else if (nb !== pos - 1) {
            this.insertAtRec(pos, val, nb + 1, curr1.next);
        }
        else {
            node.next = curr.next;
            curr.next = node;
        }
    }

    printCycle() {
        let curr = this.head;
        let arr = [];
        let ok = false;

        while (curr) {
            if (arr.includes(curr.val) && curr.val !== arr[arr.length - 1]) {
                ok = true;
            }
            arr.push(curr.val);
            curr = curr.next;
        }

        let ch = (ok) ? `yes there is cycle` : `no cycle`;

        return ch;
    }



}
ll = new LinkedList();

ll.insertTop(100);
ll.insertTop(200);
ll.insertTop(500);
ll.insertTop(600);
ll.insertTop(700);
ll.insertTop(800);

function log(ch) {
    console.log(ch);
}

ll.printLinkedList();

ll.insertAtRec(3, "kaya", 0, ll.head);

log("new linked list :");
ll.printLinkedList();