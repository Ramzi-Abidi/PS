let ch = `failure is the best thing can ever happen to u`;
let ch1 = "A";
let nb
//endWith() 


function log(ch) {
    console.log(ch);
}


//endsWith() :
log(ch.endsWith("to u"));


//charCodeAt() :                returns the ASCII code :
log("charCodeAt of space : " + ch.charCodeAt(1));


log("charCodeAt of A : " + ch1.charCodeAt(0));       // 65


//fromCharCode() : takes the ascii code an return the carac :
log("carac of code 97 is " + String.fromCharCode(97));          // "a" 


//includes() :
log(ch.includes("thing")) ;     //true
log(ch.includes(" ")) ;     //true
log(ch.includes("foo")) ;     //false


//indexOf() :
log(ch.indexOf("a")) ;          //first occ of carac "a" 

//lastIndexOf() :
log(ch.lastIndexOf("a"));           // 36

//split():
let arr = ch.split(" ") ;
log(arr) ;


//startsWith() :
log(ch.startsWith("f")) ;

//substr() :
log(ch.substring(0,4)) ;
log(ch.substring(0,1)) ;        //startPosition , endPosition

