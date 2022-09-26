function subSeq(arr, prefix, res) {
    if (arr.length === 0) {
        s += sum(prefix);
        res.push(prefix);
        return;
    }
    else {
        subSeq(arr.slice(1), prefix, res);
        subSeq(arr.slice(1), [...prefix, arr[0]], res);
    }
}

let res = [];
let s = 0;
subSeq([1, 3], [], res);
console.log(res);
console.log(s);

function sum(arr) {
    let s = arr[0];
    if (arr.length === 0)
        return 0;
    else
        if (arr.length === 1)
            return arr[0];
        else {
            for (let i = 1; i < arr.length; i++) {
                s ^= arr[i];
            }
        }
        console.log("s:"+s);
    return s;
}