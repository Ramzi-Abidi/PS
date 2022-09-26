//Q: find the smallest number >= than the target element .

let arr = [2, 3, 5, 9, 14, 16, 18];

let target = 19;

function binarySearchIt(arr, target) {
    if (target > arr[arr.length - 1])
        return false;

    let start = 0,
        end = arr.length - 1,
        mid;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2)     //start+end/2 can exceed Math.pow(2,31) 
        if (target === arr[mid])
            return arr[mid];
        else
            if (target > arr[mid])
                start = mid + 1;
            else
                if (target < arr[mid])                            //target<arr[mid]
                    end = mid - 1;
    }

    return arr[start];
}

console.log(binarySearchIt(arr, target));