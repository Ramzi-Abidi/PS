let arr = [3, 9, 2, 1, 0];


function binarySearchIt(arr) {
    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1])
            return mid;
        else
            if (arr[mid] < arr[mid + 1])
                start = mid;
            else                    //if (arr[mid] < arr[mid + 1])
                end = mid;
    }
    return false;
}

console.log(binarySearchIt(arr));