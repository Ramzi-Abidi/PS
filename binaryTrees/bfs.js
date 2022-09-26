class BST {
    constructor() {
        this.root = null;       // root is a null obj
        this.size = 0;
    }

    insert(data) {
        this.size++;

        let node = {
            data: data,
            left: null,
            right: null
        };
        if (this.root === null)
            this.root = node;
        else {
            let curr = this.root;
            while (true) {
                if (data < curr.data) {       // data < curr.data
                    if (curr.left === null) {
                        curr.left = node;
                        break;
                    }
                    else
                        curr = curr.left;
                }
                else
                    if (data > curr.data) {      // data > curr.data
                        if (curr.right !== null)
                            curr = curr.right;
                        else {
                            curr.right = node;
                            break;
                        }
                    }
            }
        }
    }
}

let bst = new BST();

bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(4);
bst.insert(2.5);

function preOrderTraversal(root, arr) {       // it's the dfs
    if (root === null)
        return;
    else {
        if (root.left !== null)
            arr.push(root.left.data);
        if (root.right !== null)
            arr.push(root.right.data);
        preOrderTraversal(root.left, arr);
        preOrderTraversal(root.right, arr);
    }
}

function bfs(root) {
    if (root === null)
        return [];

    let arr = [];
    let queue = [root];
    while (queue.length !== 0) {
        let el = queue.shift();
        arr.push(el.data);
        if (el.left)
            queue.push(el.left);
        if (el.right)
            queue.push(el.right);
    }

    return arr;
}

var levelOrder = function (root) {
    if (root === null) return []

    const result = [];
    const queue = [root];

    while (queue.length !== 0) {
        queue.push(null);
        const level = [];
        let head;
        while (head = queue.shift()) {
            level.push(head.data);
            if (head.left)
                queue.push(head.left);
            if (head.right)
                queue.push(head.right);
        }
        result.push(level);
    }

    return result;
};

var levelOrder1 = function (root) {
    if (root === null) return [];

    let res = [];
    const queue = [root];

    while (queue.length !== 0) {
        let len = queue.length;
        let childs = queue.map((node) => {
            return node.data;
        });
        res.push(childs);
        while (len > 0) {
            let head = queue.shift();
            if (head.left) queue.push(head.left);
            if (head.right) queue.push(head.right);
            len--;
        }
    }
    return res;
}
// levelOrder() levelOrder1() & returns [[2], [1,4] , [3,5]] while bfs() returns [2,1,4,3,5]  

console.log(levelOrder1(bst.root));