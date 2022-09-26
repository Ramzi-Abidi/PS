let ch = "ffffeerttttooo";

function countCharac(ch) {
    mp = new Map();

    for (let i = 0; i < ch.length; i++) {
        if (mp.has(ch[i]))
            mp.set(ch[i], mp.get(ch[i]) + 1);
        else
            mp.set(ch[i], 1);
    };

    let chres = "";

    for (let obj of mp.entries()) {
        console.log(`${obj[0]}: ${obj[1]}`);
        chres += obj[1].toString() + obj[0].toString();
    }
    return chres;
}

console.log(countCharac(ch));