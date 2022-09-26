const display = (M) => {
    let chres = "";
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j]) {
                chres += "Q";
            }
            else {
                chres += ".";
            }
        }
        chres += ",";
    }
    res.push(chres);

}

const verif = (M, row, col, n) => {
    // cheking the vertical row until the we are now (j).
    for (let i = 0; i < col; i++) {
        if (M[i][col]) {     // already ther's a queen there
            return false;
        }
    }

    // cheking the diagonal
    let maxLeft = Math.min(row, col);
    for (let i = 1; i <= maxLeft; i++) {
        if (!M[row - i][col - i]) {     // already there's a queen there
            return false;
        }
    }

    // cheking the diagonal right
    let maxRight = Math.min(row, M.length - col - 1);
    for (let i = 1; i < maxRight; i++) {
        if (!M[row - i][col + i]) {     // already ther's a queen there
            return false;
        }
    }

    return true;
};

function queens(M, n, i, j) {
    if (i === n + 1) {
        display(M);
        count++;
    }
    else {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j]) {
                if (verif(M, i, j, n)) {        // can we put the queen in i,j or not.
                    M[i][j] = true;             // putting the queen
                    queens(M, n, i + 1, j);
                    M[i][j] = false;
                }
            }
        }
    }

    return count;
}

let M = [
    [true,true,true,],
    [true,true,true,],
    [true,true,true,]
];

let count = 0;

let res = [];
let n = M.length - 1;
queens(M, n, 0, 0, res);
console.log(res);
console.log(count);