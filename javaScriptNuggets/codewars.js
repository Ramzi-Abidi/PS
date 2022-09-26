/* function capitalizeWord(word) {
    let rest = word.slice(1);

    console.log(rest);
    return word[0].toUpperCase() + rest;
}

console.log(capitalizeWord("ramzi")); */

function fct(min, max, length) {
    let i = 0;
    let k = 1;
    let chres = "";
    let signe = 1;

    while (i < length) {
        if (k === max) {
            signe = signe * -1;
            chres = chres + k.toString();
            k = k + signe;
        }

        chres = chres + k.toString();
        k = k + signe;
        i++;
    }

    return chres;
}

console.log(fct(1, 3, 5));