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

bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(22);

console.log(bst.size);

function dfsRec(root) {
    if (root === null)
        return;
    else {
        console.log(root.data);
        dfsRec(root.left);
        dfsRec(root.right);
    }
};

function preOrderTraverse(root) {       // it's the dfs
    if (root === null)
        return;
    else {
        console.log(root.data);
        preOrderTraverse(root.left);
        preOrderTraverse(root.right);
    }
}


var zigzagLevelOrder = function (root) {
    if (root === null) return []

    let res = [];
    const queue = [root];
    let k = 1;

    while (queue.length !== 0) {
        let len = queue.length;
        let childs = queue.map((node) => {
            return node.data;
        });
        if (k % 2 !== 0)
            res.push(childs);
        else
            res.push(childs.reverse());
        k++;
        while (len > 0) {
            let head = queue.shift();
            if (head.right) queue.push(head.right);
            if (head.left) queue.push(head.left);
            len--;
        }
    }
    return res;
}