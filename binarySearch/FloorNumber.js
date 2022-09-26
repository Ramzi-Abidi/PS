//Q: find the greatest element <= than the target element .

let arr = [1, 10, 11, 15, 20];

let target = 13;

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

    return arr[start + 1];
}

console.log(binarySearchIt(arr, target));