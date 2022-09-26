
const sum = (arr) => {
    let s=0 ;
    arr.map((el) => {
        s += el;
    });
    return s ;
}
function combinationSum(arr, prefix, target, target1, hash, res) {
    if (target === 0) {
        prefix.sort();      // sort to display the duplicates
        if (!hash[prefix]) {
            if (sum(prefix) === target1) {
                res.push(prefix);
                hash[prefix] = true;
                return;
            }
        }
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= target) {
                combinationSum(arr, [...prefix, arr[i]], target - arr[i], target1, hash, res);
            }
        }
    }
}

let res = [];
let target = 8;
let target1 = target;
combinationSum([10, 1, 2, 7, 6, 1, 5], [], target, target1, {}, res);
console.log(res);

/*
const dice = (chres, target, arr) => {
    if (target === 0)
        arr.push(chres);
    else {
        for (let i = 1; i <= 6; i++) {          // dice has "6" faces
            if (i <= target)
                dice(chres + i.toString(), target - i, arr);
        }
    }
}
let arr = [];
dice("", 4, arr);
console.log(arr);
*/