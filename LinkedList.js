//Fundamentals of Linked list :

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function log(ch) {
    console.log(ch);
}

function printLinkedlist(head) {
    let curr = head;       //u can use head 

    while (curr != null) {
        log(curr.val);
        curr = curr.next;
    }
}

function printLinkedlistRec(head) {
    let curr = head;

    if (curr != null) {
        log(curr.val);
        printLinkedlistRec(curr.next);
    }
}

function linkedListToArr(head) {
    let curr = head;
    let arr = [];

    while (curr != null) {
        arr.push(curr.val);
        curr = curr.next;
    }

    return arr;
}


function fillValues(arr, head) {
    if(head != null ) {
        arr.push(head.val);
        fillValues(arr,head.next);
    }
}

function linkedListToArrRec(head) {
    let curr = head;
    let arr = [] ;

    fillValues(arr,curr) ;

    return arr;
}

let node1 = new Node(5);
let node2 = new Node(10);
let node3 = new Node(15);
let node4 = new Node("a");

// node1 -> node2 -> node3 ->node4 -> null

node1.next = node2;
node2.next = node3;
node3.next = node4;

//printLinkedlist(node1) ;
/* printLinkedlistRec(node1);
log(linkedListToArr(node1)); */
log(linkedListToArrRec(node1));


//Btw Javascript does not have a char type
/* log(typeof('a'));
log(typeof("a")); */

/*
some benefits from making a linked list using js :
    - we can make a linked list with different data types
*/

//linked list compared to arrays :
/*
    Linked list :
        insertion : O(1)        
        acessing elements : O(n)

    Arrays :
        insertion : O(n)        
        acessing elements : O(1)
*/