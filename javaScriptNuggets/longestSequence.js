//Complexity of this algo is O(n).

function longestSeq(ch) {
    let arr = ch.split(" ");
    max = arr[0];
    let res = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === max.length) {
            res.push(arr[i]);
        }
    }

    return res;
}

let ch = "ramzi is the best in the world";

console.log(longestSeq(ch));