class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

const dfsRec = (root) => {
    if (root === null)
        return;
    else {
        console.log(root.val);
        return dfsRec(root.left) || dfsRec(root.right);
    }
};

const height = (root) => {
    if (root === null)
        return 0;
    else
        return 1 + Math.max(height(root.left), height(root.right));
}

console.log(height(root));
//console.log(dfsRec(root));


// Constructed binary tree is
//             1
//           /   \
//         2      3
//       /  \
//     4     5