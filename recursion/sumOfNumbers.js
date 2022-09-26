function SOD(s, n) {
    if (n === 0) {
        return s;
    }
    s += Math.floor(n % 10);

    return SOD(s, Math.floor(n / 10));
}

/* let sum = SOD(0, 125); */

/* console.log(sum); */

function reverseNum(ch, n) {
    if (n === 0) {
        return ch;
    }
    else {
        ch += String(Math.floor(n % 10));
        return reverseNum(ch, Math.floor(n / 10));
    }
}

//console.log(reverseNum("",1234));

function countNumOfZero(nb, n) {
    if (n === 0)
        return nb;
    else
        if (Math.floor(n % 10) === 0) {
            nb++;
            return countNumOfZero(nb, Math.floor(n / 10));
        }
        else {
            return countNumOfZero(nb, Math.floor(n / 10));
        }
}

/* console.log(countNumOfZero(0, 500150)); */

let arr = [1, 2, 3, 5, 6, 7];

function sortedArray(arr, i) {
    if (i === arr.length - 1) {
        return true;
    }
    else
        if (arr[i] > arr[i + 1]) {
            return false;
        }
        else
            if (arr[i] <= arr[i + 1]) {
                i++;
                return sortedArray(arr, i);
            }
}

//console.log(sortedArray(arr, 0));

// Q: returning an array 
function returnArr(arr, target, i, newArr) {
    if (i === arr.length) {
        return newArr;
    }
    else if (arr[i] === target) {
        newArr.push(i);
        return returnArr(arr, target, i + 1, newArr);
    }
    else {
        return returnArr(arr, target, i + 1, newArr);
    }
}

//console.log(returnArr([1, 5, 6, 7, -9, 5], 5, 0, []));

function returnArr(arr, target, i) {
    let newArr = [];

    if (i === arr.length) {
        return newArr;
    }
    else if (arr[i] === target) {
        newArr.push(i);
        return returnArr(arr, target, i + 1, newArr);
    }
    else {
        return returnArr(arr, target, i + 1, newArr);
    }
}

console.log(returnArr([1, 5, 6, 7, -5, 5], 5, 0));