const meals = [
    {
        name: "pasta",
        categorie: "dinner",
    },
    {
        name: "eggs",
        categorie: "breakfast",
    },
    {
        name: "meat",
        categorie: "dinner",
    },
];

// getting all categories (unique)
const allCategories = [...new Set(meals.map((obj) => {
    return obj.categorie;
}))];

console.log(allCategories);