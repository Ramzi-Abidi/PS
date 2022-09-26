class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };


    addToTop(val) {
        let node = {
            val: val,
            next: null,
        };

        if (this.head === null)
            this.head = node;
        else {
            node.next = this.head;     //this.head and not "this.head.val" because its an adress not a val
            this.head = node;
        }

        //add size :
        this.size++;
    }

    printLinkedList() {
        let curr = this.head;

        while (curr !== null) {
            log(curr.val);
            curr = curr.next;
        }
    }

    reverseIt() {
        let curr = this.head;
        let prev = null;
        let temp;

        while (curr !== null) {
            temp = curr.next;
            curr.next = prev;

            prev = curr;
            curr = temp;
        }

        this.head = prev;      //very important
    }

    reverseRec(curr, curr1) {
        if (curr === null)
            this.head = curr1;
        else {
            let temp = curr.next;

            curr.next = curr1;
            curr1 = curr;
            curr = temp;
            this.reverseRec(curr, curr1);
        }
    }

    reverseII(head, left, right) {
        let curr = head;
        let curr1 = head;
        let temp;

        while (curr !== null && left !== 1) {
            temp = curr;
            curr = curr.next;
            left--;
        };
        while (curr1 !== null && right !== 1) {
            curr1 = curr1.next;
            right--;
        };
        let temp1 = curr1.next ;

        //console.log(curr.val,curr1.val,temp.val,temp1.val) ;

        let newLL = rev(curr, temp1, temp,temp1);
        
    }

}

function rev(head, tail, alt,alt1) {
    let curr = head;
    let prev = null;
    let temp,node;

    //console.log(tail);

    while (curr.val !== tail.val) {
        node = curr ;
        temp = curr.next;
        curr.next = prev;

        prev = curr;
        curr = temp;
    }
    console.log(alt) ;

    alt.next = prev;
    alt1 = tail.next ;

}


function log(ch) {
    console.log(ch);
}

ll = new LinkedList();

ll.addToTop(5);
ll.addToTop(10);
ll.addToTop(15);
ll.addToTop(20);
ll.addToTop(25);

ll.printLinkedList();

log("reversed ll : ");

ll.reverseII(ll.head, 2, 4);

ll.printLinkedList() ;

/* ll.reverseRec(ll.head, null) ;
ll.printLinkedList(); */

/* ll.printLinkedList(); */

/* log(ll) ; */