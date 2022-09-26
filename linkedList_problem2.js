class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let node1 = new Node("a");
let node2 = new Node("b");
let node3 = new Node("c");
let node4 = new Node("d");

node1.next = node2;
node2.next = node3;
node3.next = node4;

function log(ch) {
    console.log(ch);
}

function verif(head, c) {
    let curr = head;

    while (curr != null && curr.val != c) {
        curr = curr.next;
    }

    let ok = (curr == null) ? false : true;

    return ok;

}

let c = "w";

log(verif(node1, c));