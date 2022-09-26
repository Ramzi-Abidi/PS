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

let data = [4, 2, 7, 1, 3, 6, 9];

data.forEach((num) => {
    bst.insert(num);
});


function dfs(root) {
    if (root === null)
        return;
    else {
        console.log(root.data);
        dfs(root.left);
        dfs(root.right);
    }
}



function invertTree(root) {
    if (root === null)
        return root;
    else {
        let aux = root.left;
        root.left = root.right;
        root.right = aux;
        invertTree(root.left);
        invertTree(root.right);
    }
}

/* dfs(bst.root); */

invertTree(bst.root);

dfs(bst.root);