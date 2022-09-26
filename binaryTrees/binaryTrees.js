
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);


node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

//iterative sol :
const dfs = (root) => {
    /* console.log(root); */
    let stack = [];

    stack.push(root);

    while (stack.length !== 0) {
        let curr = stack.pop();
        console.log(curr.val);

        if (curr.left)
            stack.push(curr.left);
        if (curr.right)
            stack.push(curr.right);
    }
};

//recursive sol :
const dfsRec = (root) => {
    if (root === null)
        return;
    else {
        console.log(root.val);
        dfsRec(root.left);
        dfsRec(root.right);
    }
};

const sum = (root, s) => {
    if (root === null)
        return 0;
    else if (root !== null) {
        s += root.val;
        return sum(root.left, s) || sum(root.right, s);
    }
};



//dfsRec(node1);
console.log(sum(node1, 0));