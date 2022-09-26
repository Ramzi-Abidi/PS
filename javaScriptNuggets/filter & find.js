//Filter returns an array of elements that match the condition (can change the array size unlike map).
//Find returns an object first match else it returns "undefined" .

const people = [
    {
        name: "ramzi",
        job: "developer",
        age: "21",
    },
    {
        name: "john",
        job: "data scientist",
        age: "30",
    },
    {
        name: "ahmed",
        job: "developer",
        age: "32",
    },
];

const youngPeople = people.filter((person) => {
    return person.age > 25;
});

console.table(youngPeople);
const developers = people.filter((person) => {
    return person.job.toUpperCase().trim() === "DEVELOPER";
});

console.table(developers);

//Find :

const firstYoung = people.find((person) => {
    return person.job.toUpperCase() === "DEVELOPER";
});
const firstJobless = people.find((person) => {
    return person.job.toUpperCase() === "BATTAL";
});

console.log(firstYoung);       // {name: "ramzi",job: "developer",age: "21",},
console.log(firstJobless);     // undefined