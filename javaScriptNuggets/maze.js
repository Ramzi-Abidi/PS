function count(i, j) {
    if (i === 3 || j === 3)
        return 1;
    else
        return count(i + 1, j) + count(i, j + 1);
}
//console.log(count(1, 1));

// returning all paths :
function allPaths(chres, i, j, res) {
    if (i === 3 && j !== 3) {
        allPaths(chres + "R", i, j + 1, res);
    }
    else
        if (i !== 3 && j === 3) {
            allPaths(chres + "D", i + 1, j, res);
        }
        else
            if (i === 3 && j === 3) {
                res.push(chres);
            }
            else {
                allPaths(chres + "R", i, j + 1, res);
                allPaths(chres + "D", i + 1, j, res);
            }
}

// adding a new direction (incline)
function allPaths1(chres, i, j, arr) {
    if (i === 3 && j !== 3) {
        allPaths1(chres + "R", i, j + 1, arr);
    }
    else
        if (i !== 3 && j === 3) {
            allPaths1(chres + "D", i + 1, j, arr);
        }
        else
            if (i === 3 && j === 3) {
                arr.push(chres);
            }
            else {
                allPaths1(chres + "R", i, j + 1, arr);
                allPaths1(chres + "D", i + 1, j, arr);
                allPaths1(chres + "J", i + 1, j + 1, arr);
            }
}

/* let arr = [];
allPaths1("", 1, 1, arr); */
function allPaths2(chres, i, j, arr, M) {
    if (!M[i][j])           // there's an obstacle
        return;
    else
        if (i === n - 1 && j !== n - 1) {
            allPaths2(chres + "R", i, j + 1, arr, M);
        }
        else
            if (i !== n - 1 && j === n - 1) {
                allPaths2(chres + "D", i + 1, j, arr, M);
            }
            else
                if (i === n - 1 && j === n - 1) {
                    arr.push(chres);
                }
                else {
                    allPaths2(chres + "R", i, j + 1, arr, M);
                    allPaths2(chres + "D", i + 1, j, arr, M);
                }
}

//including all paths : + using the backtracking technique  
function allPaths2(chres, i, j, arr, M, n) {
    if (!M[i][j])       //if there is an obtacle
        return;
    else
        if (i === n - 1 && j !== n - 1) {
            M[i][j] = false;
            allPaths2(chres + "R", i, j + 1, arr, M, n);
        }
        else
            if (i !== n - 1 && j === n - 1) {
                M[i][j] = false;
                allPaths2(chres + "D", i + 1, j, arr, M, n);
            }
            else
                if (i === n - 1 && j === n - 1) {       // we reached the goal
                    arr.push(chres);
                }
                else {
                    M[i][j] = false;
                    if (j !== n - 1) allPaths2(chres + "R", i, j + 1, arr, M, n);
                    if (i !== n - 1) allPaths2(chres + "D", i + 1, j, arr, M, n);
                    if (i !== 0) allPaths2(chres + "U", i - 1, j, arr, M, n);
                    if (i !== n - 1) allPaths2(chres + "L", i, j - 1, arr, M, n);
                }
                
    // when the function is over we're removing the changes
    M[i][j] = true;
}

let arr = [];

let M = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
];
let n = M.length;

allPaths2("", 0, 0, arr, M, n);

console.log(arr);