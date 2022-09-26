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

bst.insert(5);
bst.insert(2);
bst.insert(9);
bst.insert(1);
bst.insert(4);
bst.insert(7);
bst.insert(10);

function preOrderTraverse(root) {       // same as dfs
    if (root === null)
        return;
    else {
        console.log(root.data);
        preOrderTraverse(root.left);
        preOrderTraverse(root.right);
    }
}

function postOrderTraverse(root) {
    if (root === null)
        return;
    else {
        postOrderTraverse(root.left);
        postOrderTraverse(root.right);
        console.log(root.data);
    }
}

function pathSum(root, target, sum, res) {
    if (root === null) {
        return;
    }
    else {
        if (root) {
            sum += root.data;
            res.push(root.data);
            console.log(res)
        }
        pathSum(root.left, target, sum, res);
        pathSum(root.right, target, sum, res);
        if (root) {
            res.pop();
        }
    }
}

let res = [];
pathSum(bst.root, 21, 0, res);
console.log(res);