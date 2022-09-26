function rev(x) {
    let ch = String(x);

    let reversedString = ch.split("").reverse().join("");

    if (ch == reversedString)
        return true;
    else
        return false;
}

console.log(rev(5533));