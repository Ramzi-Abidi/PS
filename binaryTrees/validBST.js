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
bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(3);

function isBST(root) {
    return helper(root, Number.MIN_VALUE,
        Number.MAX_VALUE);
}

/* Returns true if the given tree is a BST and its
  values are >= min and <= max. */
function helper(root, min, max) {
    /* an empty tree is BST */
    if (root === null)
        return true;

    /* false if this root violates
    the min/max constraints */
    if (root.data < min || root.data > max)
        return false;

    /* otherwise check the subtrees recursively
    tightening the min/max constraints */
    // Allow only distinct values
    return (helper(root.left, min, root.data - 1) &&
        helper(root.right, root.data + 1, max));
}

console.log(isBST(bst.root));

