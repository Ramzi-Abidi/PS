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
        const obj = {
            val: val,
            next: null
        };

        if (this.size === 0) {
            this.head = obj;
        }
        else {
            obj.next = this.head;
            this.head = obj;
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

/*     removeDuplicate() {
        let curr = this.head;

        while (curr.next != null) {
                while(curr.val === curr.next.val) {
                    curr.next = curr.next.next
                }
            curr = curr.next ;
        };
    } */

    removeDuplicate() {
        let curr = this.head;

        while (curr.next != null) {
                if(curr.val === curr.next.val) {
                    curr.next = curr.next.next ;
                    this.size-- ;
                }
                else 
                    curr = curr.next ;
        };
    }
}


ll = new LinkedList();

ll.insertTop(800);
ll.insertTop(700);
ll.insertTop(700);
ll.insertTop(600);
ll.insertTop(600);
ll.insertTop(500);
ll.insertTop(500);
ll.insertTop(200);
ll.insertTop(200);
ll.insertTop(200);
ll.insertTop(100);
ll.insertTop(100);
ll.insertTop(100);
ll.insertTop(100);
ll.insertTop(100);
ll.insertTop(100);

ll.printLinkedList();
ll.removeDuplicate();
console.log("the new list : ");
ll.printLinkedList();