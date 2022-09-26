let letters = ["c", "f", "j"];
let target = "c";

function binarySearchIt(letters, target) {
    if (target >= letters[letters.length - 1])
        return letters[0];

    let start = 0,
        end = letters.length - 1,
        mid ;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2)     //start+end/2 can exceed Math.pow(2,31) 

        if (target >= letters[mid])
            start = mid + 1;
        else
            if (target < letters[mid]) {
                end = mid - 1;
            }
    }

    return letters[start];
}

console.log(binarySearchIt(letters, target));