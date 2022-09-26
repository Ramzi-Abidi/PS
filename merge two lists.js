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

    mergeTwoLists(ll1) {
        let list1 = this;
        let list2 = ll1;
        let listAns = new LinkedList();

        let curr = list1.head;
        let curr1 = list2.head;

        /*         console.log(curr,curr1); */

        while (curr != null && curr1 != null) {
            if (curr.val <= curr1.val) {
                listAns.insertQueue(curr.val);
                curr = curr.next;
            }
            else {
                listAns.insertQueue(curr1.val);
                curr1 = curr1.next;
            }
        }

        if (curr != null) {
            while (curr != null) {
                listAns.insertQueue(curr.val);
                curr = curr.next ;
            }
        }
        else {
            while (curr1 != null) {
                listAns.insertQueue(curr1.val);
                curr1 = curr1.next ;
            }
        }

        return listAns;
    }


}


ll = new LinkedList();

ll.insertQueue(1);
ll.insertQueue(2);
ll.insertQueue(4);

ll1 = new LinkedList();

ll1.insertQueue(1);
ll1.insertQueue(2);
ll1.insertQueue(3);

console.log("list 1 : ");
ll.printLinkedList();

console.log("list 2 : ");
ll1.printLinkedList();

let mergedList = ll.mergeTwoLists(ll1);

console.log("the new list : ")
mergedList.printLinkedList();