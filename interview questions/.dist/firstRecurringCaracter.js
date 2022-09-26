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




}

function log(ch) {
    console.log(ch);
}

function verif(ch) {
    ll = new LinkedList() ;

    for (let i = 0; i < ch.length; i++) {
        ll.insertQueue(ch[i]) ;
    }

    ll.printLinkedList() ;
}


verif("abcdefgdef") ;