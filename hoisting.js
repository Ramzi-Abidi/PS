
/*Hoisting is a js behavior of moving all decalrations in the top of the script */

/* declaration is moved to the top and inititializing is not */

function log(ch) {
    console.log(ch) ;
}

log(x) ;        // x is moved to thet top .
var x;


// the word 'function' is a declaration which means its going to be moved to the top of the script 
sayMyName() ;
function sayMyName() {
    log(`ramzi abidi`) ;
}

// this will give an error because the arrow fct is an initializing and not a declaration  
/* sayMyName1() ;   
let sayMyName1=() => {
    log(`ramzi abidi`);
} */

// undefined vs null :

let y ;
let z = null ;
log(y) ;
log(z) ;

log(typeof undefined) ;     // undefined 
log(typeof null) ;          // object 

// => null is a value but undefined is not 




