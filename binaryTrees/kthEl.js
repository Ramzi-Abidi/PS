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

bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(1);

function inOrderTraverse(root,arr) {
    if (root === null)
        return;
    else {
        inOrderTraverse(root.left,arr);
        arr.push(root.data) ;
        inOrderTraverse(root.right,arr);
    }
}

let arr = [] ;
inOrderTraverse(bst.root,arr) ;  // arr = [1,2,3,4,5,6]
console.log(arr[2]) ;           // smallest kth element (k=3) 