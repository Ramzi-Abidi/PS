
/* function permutationsII(nums, prefix, res) {
    if (nums.length === 0) {
        if (res.length === 0) {
            res.push(prefix);
            return;
        }
        let hash = {};
        for (let i = 0; i < res.length; i++) {
            hash[res[i]] = i;
        }

        if (!hash.hasOwnProperty(prefix)) {
            res.push(prefix);
            return;
        }
    }

    else {
        for (let i = 0; i < prefix.length + 1; i++) {
            let c = nums[0];
            let first = prefix.slice(0, i);
            let second = prefix.slice(i);
            permutationsII(nums.slice(1), [...first, c, ...second], res);
        }
    }
} */

function permutationsII(nums, prefix, res, hash) {
    if (nums.length === 0) {
        res.push(prefix);
        return;
    }

    else {
        for (let i = 0; i < prefix.length + 1; i++) {
            let c = nums[0];
            let first = prefix.slice(0, i);
            let second = prefix.slice(i);
            if (hash[[...first, c, ...second]]) {
                continue ;      // we will ignore any prefix/chres already done before 
            }
            else {
                permutationsII(nums.slice(1), [...first, c, ...second], res, hash);
                hash[[...first, c, ...second]] = true;
            }
        }
    }
}

/* function permutationsNewSol(nums, prefix, res) {
    if (nums.length === 0) {
        res.push(prefix);
        return;
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            prefix.push(nums[i]);
            nums.splice(i, 1);
            console.log(prefix);
            permutationsNewSol(nums, prefix, res);
            nums.push(nums[i]);
            prefix.pop();
        }
    }
} */

let res = [];
permutationsII([1, 1, 3], [], res, {});

console.log(res);