

function subSeq(arr, target, prefix, hash, res) {
    if (arr.length === 0) {
        prefix.sort();
        if (!hash[prefix]) {
            if (target === 0) {
                res.push(prefix);
                hash[prefix] = true;
                return;
            }
        }
    }

    else {
        subSeq(arr.slice(1), target, prefix, hash, res);
        subSeq(arr.slice(1), target - arr[0], [...prefix, arr[0]], hash, res);
    }
}

let arr = [];
let target = 5;

subSeq([2,5,2,1,2], target, [], {}, arr);
console.log(arr);