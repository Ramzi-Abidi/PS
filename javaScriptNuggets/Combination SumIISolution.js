

function dfs(i, arr, target, prefix, hash, res) {
    if (target < 0) {
        return;
    }
    else if (target === 0) {
        res.push(prefix);
    }
    else {
        for (let j = i; j < arr.length; j++) {
            if (i !== j && arr[j] === arr[j - 1])
                continue;
            dfs(j + 1, arr, target - arr[j], [...prefix, arr[j]], hash, res);
        }
    }
}

let res = [];
let target = 5;
let candidates = [2, 5, 2, 1, 2];
candidates.sort();
dfs(0, candidates, target, [], {}, res);
console.log(res);