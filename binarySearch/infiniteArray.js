// infinte array => we cannot use arr.length method !!

let arr = [-1, 0, 1, 2, 3, 4, 6, 9];

let target = 4;

function binarySearchIt(arr, target) {
    let start = 0,
        end = 1, newStart;

    while (target > arr[end]) {
        newStart = end + 1;
        end = end + (end - start + 1) * 2;
        start = newStart ;
        console.log(end);
    };
    console.log(start, end);

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);     //because start+end/2 can exceed Math.pow(2,31) 

        if (target === arr[mid])
            return true;
        else
            if (target > arr[mid])
                start = mid + 1;
            else
                end = mid - 1;
    }
    return false;
}

console.log(binarySearchIt(arr, target));