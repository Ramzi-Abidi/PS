function log(ch) {
    console.log(ch);
}

// 'const' is for constants, where values can be changed but references cannot . 
const arr = [];
arr.push(5);       //valid 
arr.push(6);       //valid 
arr.push(7);       //valid
/* arr = {             //invalid because we changed the reference from an array to an object
    5 : 5,
    6 : 7
}
 */
log(arr);

const x = 5;

var a = "a";           //var unlike const allows us to change the reference (the type that the variable points to)
var a = 4;
var a = ["ramzi", "abidi", "17"];
log(a);

// let is for block scope : block is everything between {}

//log(index);

/* for (let index = 0; index < 5; index++) {
    log(index) ;
}
log(index) ; */

//
/* function fct() {
    let x = 5;
    let ch = "new string";
    log(`variable x from ${x}`);
} */

