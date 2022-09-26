// Hard version

let arr = [1, 2, 4, 5, 9, 5, 4, 2, 0];      //Peak = 9

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

console.log(findPeak(arr));