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

    printCycle() {
        let curr = this.head;
        let arr = [];
        let ok = false;

        while (curr) {
            if (arr.includes(curr.val) /* && curr.val !== arr[arr.length - 1] */) {
                ok = true;
                break;
            }
            arr.push(curr.val);
            curr = curr.next;
        }

        return ok;
    }



    //using fast & slow approach :
    cycleDetection() {
        if (this.head === null) {
            return false;
        }
        let fast = this.head;
        let slow = this.head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) {
                return true;
            }
        }
        return false;
    }

    lengthOfCycle() {
        let fast = this.head;
        let slow = this.head;
        let cycleLength = 1;
        let ok = true;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (fast === slow) {
                ok = true;
                break;
            }
        }
        if (ok) {
            slow = slow.next;
            while (slow !== fast) {
                cycleLength++;
                slow = slow.next;
            }
        }
        else
            log(`No cycle detected`);
    }

    startOfCycle() {
        if (this.head === null) {     //empty list or list has just one node .
            return null;
        }

        let ok = false;
        let slow = this.head;
        let fast = this.head;

        while (fast.next !== null && slow !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                ok = true;
                break;
            }
        }
        if (ok) {
            while (slow.next.next !== fast) {
                slow = slow.next;
            }
            return slow;
        }
        else
            return null;
    }

    isHappy(n) {

        let sqr = sqrOfNum(n);

        let node = {
            val: sqr,
            next: null
        };

        if (this.head === null) {
            this.head = node;
        }
        else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            };
            temp = node;
        }

        console.log(this);

        /*         let slow = n;
                let fast = n; */
    }


}

function sqrOfNum(n) {
    let sum = 0;
    while (n !== 0) {
        sum += Math.pow((n % 10), 2);
        n = Math.floor(n / 10);
    };
    return sum;
};

/* ll = new LinkedList();

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

console.log(ll.cycleDetection()); */

ll = new LinkedList();

ll.isHappy(19);