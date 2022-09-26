/* function combinations(ch, chres, arr) {
    if (ch === "") {
        arr.push(chres);
        return;
    }
    else {
        for (let i = 0; i < 6; i++) {
            combinations(ch.slice(1), chres + ch[0], arr);
        }
    }
}


let arr = [];
combinations(3, "", arr);

console.log(arr); */