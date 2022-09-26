var findInMountainArray = function (target, arr) {

    let firstBS, secondBS;

    let peak = findPeak(arr);

    firstBS = binarySearch(arr, target, 0, peak);

    if (!firstBS) {
        secondBS = binarySearch(arr, target, peak, arr.length - 1);
        return secondBS;
    }
    else {
        return firstBS;
    }
};

function binarySearch(arr, target, start, end) {

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)

        if (target == arr[mid])
            return mid;
        else
            if (target > arr[mid])
                start = mid + 1;
            else
                end = mid - 1;

    }
    return false;
}


function findPeak(arr) {
    let start = 0,
        end = arr.length - 1;

    while (start < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] < arr[mid + 1])
            start = mid + 1;
        else
            if (arr[mid] > arr[mid + 1])
                end = mid;
    }
    return start;
}

console.log(findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1]));