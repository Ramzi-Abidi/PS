function fct(str) {
    let chres = "";
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < str.length; i++) {
        if (alpha.indexOf(str[i]) != -1)
            chres += alpha[(alpha.indexOf(str[i]) + 13) % 26];
        else
            chres += str[i];
    }

    return chres;
}

console.log(fct("SERR PBQR PNZC"));