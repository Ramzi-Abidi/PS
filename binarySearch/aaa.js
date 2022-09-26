let arr = [48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38];

var targetIndices = function (arr, target) {
    arr.sort(function (a, b) { return a - b });
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target)
            res.push(i);
    }

    return res;
};


console.log(targetIndices(arr, 6));