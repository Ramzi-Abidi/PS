let nums = [12, 356, 22, 99, 645, 6547, 65489, 654123, 100000];



var findNumbers = function (nums) {
    let ch, nb = 0;
    for (let i = 0; i < nums.length; i++) {
        ch = String(nums[i]);
        if (ch.length % 2 === 0)
            nb++;
    }

    return nb;
};

//console.log(findNumbers(nums)) ;

var findNumbers1 = function (nums) {
    let nb = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0)
            nums[i] = nums[i] * -1;

        if (Math.floor(Math.log10(nums[i]) + 1) % 2 === 0)
            nb++;
    }

    return nb;
};

console.log(findNumbers1(nums));