/*
    returns new array 
    unlike it keeps the same length of the array 
    uses the values from the original array and returns new ones 
*/
/* const result = document.querySelector(".names");


const arr = [
    {
        name: "jhon",
        age: "21",
        job: "Developer"
    },
    {
        name: "ramzi",
        age: "21",
        job: "Web Developer"
    },
    {
        name: "Suzy",
        age: "21",
        job: "Mobile Developer"
    },
];

const names = arr.map((person) => {
    return `
        <div>
            <span> name : ${person.name} </span>
            <span> job : ${person.job} </span>
        </div>`;
});


console.log(result) ;

result.innerHTML = names.join("") ; */

let counter = document.querySelector(".val") ;
const inc = document.querySelector(".inc") ;
const dec = document.querySelector(".dec") ;
const h2 = document.querySelector("h2") ;

console.log(counter);
let nb = 0 ;

inc.addEventListener("click",()=>{
    nb++ ;
    counter.value = nb ;
    h2.textContent = nb ;
})

dec.addEventListener("click",()=>{
    nb-- ;
    counter.value = nb ;
    h2.textContent = nb ;
})

