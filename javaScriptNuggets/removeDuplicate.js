let ch = "ramzi ramzi a b c d" ;

function removeDuplicate(ch) {
    let arr = ch.split(" ") ;
    return [...new Set(arr)] ;
}

console.log(removeDuplicate(ch)) ;