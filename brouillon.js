/* function log(ch) {
    console.log(ch);
}

const obj = {
    name: "abidi",
    lastName: "ramzi"
};

let obj1 = obj; 

obj1.name = "jhon" ;

log(obj) ;
log(obj1) ; */

// assign by value
let batman = 7;
let superman = batman;   //assign-by-value
superman = superman + 1;
console.log(batman);     //7
console.log(superman);   //8


// assign by reference :  
let firestorm = [3, 6, 3];
let atom = firestorm;   //assign-by-reference
console.log(firestorm); //[3,6,3]
console.log(atom);      //[3,6,3]
atom = [9, 0, 9];         //value is reassigned (create new reference)
console.log(firestorm); //[3,6,3]
console.log(atom);

console.log("new work");

let persons = ["ramzi", "ahmed", "chiheb", "sara"];

let a = persons.filter((person) => {
    return person.length === 20;
});

console.log(a);