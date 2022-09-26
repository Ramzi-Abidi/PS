var wiggleMaxLength = function (t) {
    let k = 1;
    let prev = 2;

    for (let i = 1; i < t.length; i++) {
        let diff = t[i] - t[i - 1];
        if (diff > 0 && prev != 1) {
            k++;
            prev = 1;
        }
        else if (diff < 0 && prev != 0) {
            k++;
            prev = 0;
        }
    }

    return k;
};

console.log(wiggleMaxLength([1,7,4,9,2,5]));