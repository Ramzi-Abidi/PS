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
let node5 = new Node("e");

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function log(ch) {
    console.log(ch);
}

function getVal(head , nb) {
    let i = 0 ;
    let curr = head ;

    while(i<nb) {
        curr = curr.next ;
    }

}


getVal(node1, 4);