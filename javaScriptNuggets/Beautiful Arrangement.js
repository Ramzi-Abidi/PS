function valid(arr) {
    if (arr.length === 0)
        return true;
    let i = 0;
    while (arr[i] % (i + 1) === 0 || (i + 1) % arr[i] === 0) {
        i++;
    }

    if (i === arr.length) {
        console.log(arr);
        return true;
    }
}

function permutations(arr, prefix) {
    if (arr.length === 0) {
        if (valid(prefix)) {
            nb++;
        }
        return;
    }

    let c = arr[0];
    for (let i = 0; i < prefix.length + 1; i++) {        // nb(call_stacks) = chres.length + 1 
        let f = prefix.slice(0, i);
        let s = prefix.slice(i);
        permutations(arr.slice(1), [...f, c, ...s]);
    }
}

let nb = 0;
permutations([1, 2, 3, 14, 15, 16], []);
console.log(nb);