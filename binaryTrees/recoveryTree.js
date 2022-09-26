class BST {
    constructor() {
        this.root = null;       // root is a null obj
    }

    insert(data) {
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

bst.insert(1);
bst.insert(3);
bst.insert(2);

function inOrderTraversal(root, arr) {
    if (root === null)
        return;
    else {
        inOrderTraversal(root.left,arr);
        arr.push(root.data);
        inOrderTraversal(root.right,arr);
    }
}


//dfsRec(bst.root);
let arr = [];
inOrderTraversal(bst.root, arr);

console.log(arr);

console.log(bst.root.left);