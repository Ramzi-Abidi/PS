let arr = [-4, 0, 1, 2, 3, 4, 6, 9];
arr.sort((a, b) => {
    return b - a;
})
let target = 4;

/* function binarySearch(t, deb, fin, target) {

    let middle = Math.floor((deb + fin) / 2);

    console.log(t[middle]);

    if (deb > fin)
        return false;

    else
        if (target === t[middle])
            return true;
        else
            if (target > t[middle])
                return binarySearch(t, middle + 1, fin, target);

            else
                return binarySearch(t, deb, middle - 1, target);
}
 */

function binarySearchIt(arr, target) {
    let asc = true;
    if (arr[0] > arr[arr.length - 1])
        asc = false;

    let start = 0,
        end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2)     //start+end/2 can exceed Math.pow(2,31) 
        if (target == arr[mid])
            return mid;
        else
            if (target > arr[mid] && asc)
                start = mid + 1;
            else
                if (target < arr[mid] && asc)                            //target<arr[mid]
                    end = mid - 1;
                else
                    if (target > arr[mid] && !asc)
                        end = mid - 1;
                    else
                        if (target < arr[mid] && !asc)
                            start = mid + 1;
    }
    return false;
}


console.log(arr);
console.log(binarySearchIt(arr, target));