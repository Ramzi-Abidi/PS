function findIndex(arr, target, arr1, i) {
    if (i === arr.length)
        return arr1;
    else
        if (arr[i] === target) {
            arr1.push(i);
            return findIndex(arr, target, arr1, i + 1);
        }
        else
            return findIndex(arr, target, arr1, i + 1);
}

function findIndex2(arr, target, i) {
    let list = [];

    if (i === arr.length)
        return list;
    else
        if (arr[i] === target) {
            list.push(i);
        }
    let ansFromBelow = findIndex2(arr, target, i + 1);

    list = [...list, ...ansFromBelow];
    return list ;
}


//console.log(findIndex([5, 4, 4, 6, 3, 2, 4], 4, [], 0));
console.log(findIndex2([5, 4, 4, 6, 3, 2, 4], 4, 0));


/*
    CL : if you don't want to pass the array result into the param, you can declare
    two arrays list and ansFromBelow  
*/