// dot notation : 
const person = {
    name: "ramzi",
    job: "developer"
};

console.log(person.name);
console.log(person.job);

// key brackets notation :

const state = {
    loading: true,
    name: "unkown",
    job: "battal",
    age: "21",
};

function updateState(key, val) {
    state[key] = val;
}

updateState("name", "ramzi");
updateState("job", "developer");
updateState("loading", false);

console.log(state);