// cycle detection approach using the array :

var isHappy = function (n) {
    let arr = [];

    let sum = sqrOfNum(n);

    if (sum === 1) {
        return true;
    }

    while (sum !== 1) {
        if (arr.includes(sum)) {
            console.log(sum);
            return false;
        }
        else {
            arr.push(sum);
            sum = sqrOfNum(sum);
        }
    }

    if (sum === 1) {
        return true;
    }

}

function sqrOfNum(n) {
    let sum = 0;
    while (n !== 0) {
        sum += Math.pow((n % 10), 2);
        n = Math.floor(n / 10);
    };
    return sum;
};

console.log(isHappy(19));