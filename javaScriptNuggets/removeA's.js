
// O(n²) 
function remove(ch, i) {
    if (i === ch.length)
        return ch;
    else
        if (ch[i] === "a")
            ch = ch.replace(ch[i], "");
    return remove(ch, i + 1);
}


// O(n)
function remove1(ch, i, chres) {
    if (i === ch.length)
        return chres;
    else
        if (ch[i] !== "a")
            chres += ch[i];
    return remove(ch, i + 1, chres);
}

    console.log(remove1("ramziabidi", 0, ""));