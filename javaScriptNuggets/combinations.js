function subSeq(ch, ch1, arr) {
    if (ch.length === 0) {
        if (ch1.length === 2)
            arr.push(ch1);
        return;
    }
    else {
        subSeq(ch.slice(1), ch1, arr);
        subSeq(ch.slice(1), [...ch1, ch[0]], arr);
    }
}

let arr = [];
subSeq([1, 2, 3, 4], [], arr);
console.log(arr);

/* const recursion = function (n, k, i, prefix, res) {
    if (prefix.length === k) {         // LINE 1
        res.push(prefix.slice(0));      // to make a copy from it
        return;
    }

    for (let j = i; j <= n; j++) {          // LINE 2
        prefix.push(j);
        recursion(n, k, j + 1, prefix, res);
        prefix.pop();
    }
}

let res = [];
recursion(4, 2, 1, [], res);
console.log(res); */