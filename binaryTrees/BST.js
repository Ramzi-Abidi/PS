class BST {
    constructor() {
        this.root = null;       // root is a null obj
        this.size = 0;
    }

    insert(data) {
        this.size++ ;

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

function inOrderTraverse(root) {
    if (root === null)
        return;
    else {
        inOrderTraverse(root.left);
        console.log(root.data + " ");
        inOrderTraverse(root.right);
    }
}

function preOrderTraverse(root) {       // it's the dfs
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

function min(root) {
    if (root.left === null)
        return root.data;
    else
        return min(root.left);
}

function max(root) {
    if (root.right === null)
        return root.data;
    else
        return max(root.right);
}

//dfsRec(bst.root);
//inOrderTraverse(bst.root) ;
//preOrderTraverse(bst.root);
//postOrderTraverse(bst.root);
//dfsRec(bst.root);

//console.log("the min in bst : " + min(bst.root));
//console.log("the max in bst : ", max(bst.root));


function find(target, root) {
    if (curr === null)
        return false;

    let curr = root;

    while (curr.data !== target) {
        if (target < curr.data)
            curr = curr.left;
        else
            curr = curr.right;
        if (curr === null) {
            return false;
        }
    }
    return true;
}

//console.log(find(99, bst.root));

//Rq : post/pre/in Order traverse is just like DFS, all u have to do is to play(play with order of the calls) with the recursive calls
