
let arr = [48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38];
arr.sort(function (a, b) { return a - b });

let target = 6;

function binarySearchIt1(arr, target, searchingForStart) {
    let ok = false;
    let mid;

    if (target > arr[arr.length - 1] || arr.length === 0)
        return -1;

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);

        if (target > arr[mid])
            start = mid + 1;
        else
            if (target < arr[mid])
                end = mid - 1;
            else {                          //arr[mid] === target
                ok = true;
                if (searchingForStart)
                    end = mid - 1;
                else
                    start = mid + 1;
            };
    }
    if (!ok)
        return -1;
    else
        if (searchingForStart)
            return start;
        else
            return start - 1;
}

let start = binarySearchIt1(arr, target, true);
let end = binarySearchIt1(arr, target, false);

if (start === -1)
    console.log([-1, -1]);
else {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    console.log(arr);
}