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
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

function dfsRec(root) {
    if (root === null)
        return;
    else {
        console.log(root.data);
        dfsRec(root.left);
        dfsRec(root.right);
    }
};

function insert(root, n) {
    let node = new TreeNode(n, null, null);

    if (this.root === null)
        this.root = node;
    else {
        let curr = this.root;
        while (true) {
            if (data < curr.data) {
                if (curr.left === null) {
                    curr.left = node;
                    break;
                }
                else
                    curr = curr.left;
            }
            else
                if (data > curr.data) {
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