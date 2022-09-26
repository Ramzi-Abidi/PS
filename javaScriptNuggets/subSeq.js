// subsequences are for strings and subsets are for arrays .

function subSeq(ch, ch1, arr) {
    if (ch === "") {
        arr.push(ch1);
        return;
    }
    else {
        subSeq(ch.slice(1), ch1, arr);
        subSeq(ch.slice(1), ch1 + ch[0], arr);
    }
}

// permutations : subsets
function permutations(ch, chres, arr1) {
    if (ch.length === 0) {
        arr1.push(chres);
        return;
    }

    let c = ch[0];
    for (let i = 0; i < chres.length + 1; i++) {        // nb(call_stacks) = chres.length + 1 
        let f = chres.slice(0, i);
        let s = chres.slice(i);
        permutations(ch.slice(1), [...f, c, ...s], arr1);
    }
}

let arr = [];
permutations("001", [], arr);
console.log(arr);

// permutations : subsequence

/* function permutations(ch, chres, arr1) {
    if (ch.length === 0) {
        arr1.push(chres);
        return;
    }

    let c = ch[0];
    for (let i = 0; i <= chres.length; i++) {
        let f = chres.slice(0, i);
        let s = chres.slice(i);
        permutations(ch.slice(1), f + c + s, arr1);
    }
}

let arr = [];
permutations("abc", "", arr);
console.log(arr); */