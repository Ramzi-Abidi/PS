let alpha = {           // this is a hashmap
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}

function letterCombinations(ch, chres, arr) {
    if (ch === "") {
        arr.push(chres);
        return;
    }

    else {
        let chars = alpha[ch[0]];        // chars = "abc" next it will be "def"
        for (let char of chars) {
            letterCombinations(ch.slice(1), chres + char, arr);
        }
    }
}

let arr = [];
letterCombinations("6", "", arr);
console.log(arr);


/*function letterCombinations(ch, chres) {
    if (ch === "") {
        let arr = [];
        arr.push(chres);
        return arr;
    }

    let digit = ch[0] - "0";        // String to Number
    let arrRes = [];

    for (let i = (digit - 1) * 3; i < digit * 3; i++) {
        let carac = String.fromCharCode("a".charCodeAt(0) + i-3);
        arrRes = [...arrRes, ...letterCombinations(ch.slice(1), chres + carac)];
    }
    return arrRes;
}
 let arr = [];
letterCombinations("23", "", arr);
console.log(arr); */

