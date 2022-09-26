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
}

function log(ch) {
    console.log(ch);
}

l1 = new LinkedList();
l2 = new LinkedList();

l1.addToTop(5);
l1.addToTop(4);
l1.addToTop(5);

l2.addToTop(8);
l2.addToTop(5);
l2.addToTop(2);


function add() {
    let curr1 = l1.head;
    let curr2 = l2.head;
    let ch1 = "";
    let ch2 = "";

    while (curr1) {
        ch1 += String(curr1.val);
        curr1 = curr1.next;
    }

    while (curr2) {
        ch2 += String(curr2.val);
        curr2 = curr2.next;
    }

    let sum = ch1.reverse().parseInt() + ch2.reverse().parseInt();
}