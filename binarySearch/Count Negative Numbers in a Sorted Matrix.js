
let arr = [48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62, 77, 15, 38];

function binarySearch(arr) {
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
            else
                if (arr[mid] < -1) {
                    count++;
                }
    }
}


let count = 0;

let M = [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
];


for (let i = 0; i < M.length; i++) {
    M[i].sort((a, b) => {
        return a - b;
    });
    binarySearch(M[i]);
}


// in progress