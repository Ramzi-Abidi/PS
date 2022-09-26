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


var rightSideView = function (root) {
    const res = []
    let level = 0

    const pushValue = (value, level) => {
        if (res[level] === undefined) res[level] = [value]
    }

    const preOrderTraverse = (root, level) => {
        if (root === null)
            return;
        else {
            pushValue(root.data, level) ;
            level++ ;
            preOrderTraverse(root.right, level)
            preOrderTraverse(root.left, level)
        }
    }

    preOrderTraverse(root, level) ;

    return res;
}

console.log( rightSideView(bst.root));