// cycle detection approach without array : (fast & slow pointers)

var isHappy = function (n) {
    let slow = n;
    let fast = n;

    if (n === 1) {
        return true;
    }

    slow = sqrOfNum(n);
    fast = sqrOfNum(slow);

    while (fast !== slow) {
        slow = sqrOfNum(slow);
        fast = sqrOfNum(sqrOfNum(fast));
    }
    if (slow === 1)
        return true;
    else 
        return false;

}

function sqrOfNum(n) {
    let sum = 0;
    while (n !== 0) {
        sum += Math.pow((n % 10), 2);
        n = Math.floor(n / 10);
    };
    return sum;
};

console.log(isHappy(12));