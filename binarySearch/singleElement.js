//let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let arr = [3, 3, 7, 7, 10, 11, 11];

let a = binarySearchIt(arr, true);
let b = binarySearchIt(arr, false);

if (a)
    console.log(a);
else
    console.log(b);

function binarySearchIt(arr, ok) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)     //start+end/2 can exceed Math.pow(2,31) 

        if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1])
            return arr[mid];
        else
            if (Math.floor(mid + 1) % 2 === 0)
                start = mid + 1;

    }
    return false;
}