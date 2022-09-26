class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function log(ch) {
    console.log(ch);
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;

//sum recursively :
function sum(s, head) {
    if (head != null) {
        s = s + head.val;
        sum(s, head.next);
    }
    else
        log(s);
}

//sum iteratively :
function sumIteratively(head) {
    //log(head) ;

    let curr = head;
    let s = 0;

    while (curr !== null) {
        s += curr.val;
        curr = curr.next;
    }
    log(s) ;
}

function sumList(head) {
    let curr = head;

    //sum(0, curr);
    sumIteratively(curr);
}

sumIteratively(node1);




/* log(sumList(node1)); */