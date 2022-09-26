// Hard version

//let arr = [3, 9, 2, 1, 0];
let arr = [1, 2, 3, 4, 5, 3, 1];

let target = 3 ;

function findFirstOccInBitonicArr(arr, target) {
    let firstBS, secondBS;

    let peak = findPeak(arr);

    firstBS = binarySearch(arr, target, 0, peak);

    if (!firstBS) {
        secondBS = binarySearch(arr, target, peak, arr.length);
        return secondBS ;
    }
    else {
        return firstBS ;
    }
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



function binarySearch(arr, target, start, end) {

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)     //start+end/2 can exceed Math.pow(2,31) 

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


console.log(findFirstOccInBitonicArr(arr,target));

/* console.log(findPeak(arr)); */