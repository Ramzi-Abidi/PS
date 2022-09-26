function skipString(ch) {
    if (ch === "")
        return "";
    else
        if (!ch.startsWith("apple")) {
            return ch[0] + skipString(ch.slice(1));
        }
        else {
            return skipString(ch.slice(5));
        }
}

console.log(skipString("ramziapplerr")) ;