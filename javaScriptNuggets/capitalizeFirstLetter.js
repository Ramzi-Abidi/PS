function capitalize(ch) {
    /* 
        ch = ch + " " ;
        while (ch.indexOf(" ") != -1) {
            let ch1 = ch.substr(0, ch.indexOf(" "));
            arr.push(ch1);
            ch = ch.replace(ch.substr(0, ch.indexOf(" ") + 1), "");
        }
        console.log(arr) ; */

    let ans = ch.split(" ").map((word) => {
        let firstLetter = word.slice(0, 1).toUpperCase();
        rest = word = word.slice(1);
        return firstLetter + rest ;
    });
    return ans ;
}

console.log(capitalize("ramzi is the best haa"));