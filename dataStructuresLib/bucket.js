const { LinkedList } = require("buckets-js");

let ll = new LinkedList();

let arr = [1, 2, 3, 5, 4];

ll.add(5);
ll.add(6);
ll.add(7);

console.log(ll);

let curr = ll.first;

ll.forEach((el) => {
    console.log(el);
})

/* while(curr) {
    console.log(curr.val);
    curr = curr.next ;
} */