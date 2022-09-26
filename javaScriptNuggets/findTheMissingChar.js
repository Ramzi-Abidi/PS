
function verif(ch) {
    let letter = "abcdefghijklmnopqrstuvwxyz";
    let i = 0;

    while (ch[0] !== letter[i])
        i++;

    let k = 0;
    while (k < ch.length && ch[k] === letter[i]) {
        k++;
        i++ ;
    }
    
    return k === ch.length;
}

console.log(verif("xyz"));
 