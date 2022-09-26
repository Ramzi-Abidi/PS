/* let generateTrees = function (n) {
    if (n === 0)
        return [];

    const generate = (start, end) => {
        const result = [];

        if (start > end)
            return [null];

        for (let i = start; i <= end; i++) {
            const leftTrees = generate(start, i - 1);
            const rightTrees = generate(i + 1, end);

            for (let leftNode of leftTrees) {
                for (let rightNode of rightTrees) {
                    const root = {
                        data: i,
                        left: null,
                        right: null,
                    }
                    root.left = leftNode;
                    root.right = rightNode;

                    result.push(root);
                }
            }
        }

        return result;
    }

    return generate(1, n);
};


generateTrees(3).forEach(element => {
    console.log(element);
}); */