const dice = (chres, target, arr) => {
    if (target === 0)
        arr.push(chres);
    else {
        for (let i = 1; i <= 6; i++) {          // dice has "6" faces
            if (i <= target)
                dice(chres + i.toString(), target - i, arr);
        }
    }
}

const diceCustomFace = (chres, target, arr, n) => {
    if (target === 0)
        arr.push(chres);
    else {
        for (let i = 1; i <= n; i++) {          // dice has "n" faces
            if (i <= target)
                diceCustomFace(chres + i.toString(), target - i, arr, n);
        }
    }
}

let arr = [];
dice("", 4, arr);
console.log(arr);