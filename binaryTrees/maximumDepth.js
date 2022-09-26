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

function dfs(root) {
    if (root === null)
        return 0;
    else if (!root.left && !root.right)
        return 1;
    else
        return Math.max(dfs(root.left), dfs(root.right)) + 1;
}

function preOrderTraversal(root) {
    if (root === null)
        return 0;
    else {
        return 1 + Math.max(preOrderTraversal(root.left), preOrderTraversal(root.right));
    }
}

function bfs(root, i) {       // it's the dfs
    if (root === null)
        return []

    const queue = [root];

    while (queue.length !== 0) {
        queue.push(null);
        const level = [];
        let head;
        while (head = queue.shift()) {
            level.push(head.data);
            if (head.left)
                queue.push(head.left);
            if (head.right)
                queue.push(head.right);
        }
        i++;
    }

    return i;
};

console.log(preOrderTraversal(bst.root));