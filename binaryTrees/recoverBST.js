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
bst.insert(3);
bst.insert(1);
bst.insert(9);
bst.insert(4);


function dfsRec(root) {
    if (root === null)
        return;
    else {
        console.log(root.data);
        dfsRec(root.left);
        dfsRec(root.right);
    }
};

function inOrderTraverse(root) {
    if (root === null) {
        return;
    }
    else {
        inOrderTraverse(root.left);
        console.log(root.data);
        inOrderTraverse(root.right);
    }
}

inOrderTraverse(bst.root);
