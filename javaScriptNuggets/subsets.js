function combinations(nums, prefix, arr) {
    if (nums.length === 0) {
        arr.push(prefix);
        return;
    }
    else {
        let first = [...prefix, nums[0]];
        combinations(nums.slice(1), first, arr);
        combinations(nums.slice(1), prefix, arr);
    }
}

function combinationsNoDuplication(nums, prefix, arr, hash) {
    if (nums.length === 0) {
        if (!hash[prefix]) {
            arr.push(prefix);
            hash[prefix] = true;
        }
        return;
    }
    else {
        combinationsNoDuplication(nums.slice(1), [...prefix, nums[0]], arr, hash); // mara tekhedh nums[0]
        combinationsNoDuplication(nums.slice(1), prefix, arr, hash); //mara metekhedhch el nums[0]
    }
}

let arr = [];
let nums = [1,2,5,0];
nums.sort();            // very important
combinationsNoDuplication(nums, [], arr, {});

console.log(arr);