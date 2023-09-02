
const products = [

    { name: "The Naked Gun", category: 1, decade: 1, genre: 1, stock: 0 },
    { name: "Dum and Dumber", category: 2, decade: 2, genre: 1, stock: 10 },
    { name: "Wayne's Wolrd", category: 1, decade: 2, genre: 1, stock: 10 },
    { name: "There's Something about Mery", category: 2, decade: 2, genre: 1, stock: 10 },
    { name: "Stand by Me", category: 1, decade: 1, genre: 2, stock: 10 },
    { name: "Schindler's List", category: 1, decade: 2, genre: 2, stock: 10 },
    { name: "Good Will Hunting", category: 1, decade: 2, genre: 2, stock: 10 },
    { name: "The Outsiders", category: 2, decade: 1, genre: 2, stock: 0 },
    { name: "Die Hard", category: 1, decade: 1, genre: 3, stock: 10 },
    { name: "Rambo: First Blood", category: 2, decade: 1, genre: 3, stock: 10 },
    { name: "The Rock", category: 1, decade: 2, genre: 3, stock: 0 },
    { name: "Terminator 2: Jugdment day", category: 2, decade: 2, genre: 3, stock: 10 },
    { name: "The Shining", category: 1, decade: 1, genre: 4, stock: 10 },
    { name: "A Nightmare on Elm Street", category: 2, decade: 1, genre: 4, stock: 0 },
    { name: "Scream", category: 1, decade: 2, genre: 4, stock: 10 },
    { name: "It", category: 2, decade: 2, genre: 4, stock: 10 },
]

const categories = [
    {
        id: 1,
        name: "DVD",
    },
    {
        id: 2,
        name: "VHS",
    },
]

const decades = [

    {
        id: 1,
        name: "80's",
    },

    {
        id: 2,
        name: "90's",
    }
]

const genres = [

    {
        id: 1,
        name: "Comedy",
    },

    {
        id: 2,
        name: "Drama",
    },

    {
        id: 3,
        name: "Action",
    },

    {
        id: 4,
        name: "Horror",
    },
]

class Product {
    constructor(name, decade, category, genre) {
        this.name = name;
        this.category = category;
        this.decade = decade;
        this.genre = genre;
    }
}

let PriceCheck = "VHS $3\n\n DVD $5";

function showGenre() {

    let arrayAllGenres = genres.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(arrayAllGenres);

    let allGenres = parseInt(prompt("Choose a Genre"));

    let theGenres = products.filter(el => el.genre === allGenres);

    let allTheGenres = theGenres.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(allTheGenres);

}

function showDecade() {

    let arrayAllDecades = decades.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(arrayAllDecades);

    let allDecades = parseInt(prompt("Choose a Decade"));

    let theDecades = products.filter(el => el.decade === allDecades);

    let allTheDecades = theDecades.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(allTheDecades);

}

function showPriceCheck() {
    alert(PriceCheck)
}

function showCatalog() {

    let arrayNames = products.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(arrayNames);
};

function showFormat() {

    let arrayAllCategories = categories.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(arrayAllCategories);

    let allFormarts = parseInt(prompt("Choose a Format"));

    let formatCategories = products.filter(el => el.category === allFormarts);

    let allFormatCategory = formatCategories.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(allFormatCategory);

};

function outofStock() {

    let outofstockProducts = products.filter(el => el.stock === 0);

    let uStock = outofstockProducts.map((el, index) => (index + 1) + ". " + el.name.toUpperCase()).join("\n")
    alert(uStock);

}

do {
    option = parseInt(prompt("Enter an Option:\n\n1. Catalog:\n2. Shop by Genre:\n3. Shop by Decade:\n4. Price check\n5. Shop by Format\n6. Something out of Stock?\n\n To Exit enter 0"));

    switch (option) {
        case 0:
            alert("Thank you for your visit, come back soon!");
            break;
        case 1:
            showCatalog();
            break;
        case 2:
            showGenre();
            break;
        case 3:
            showDecade();
            break;
        case 4:
            showPriceCheck();
            break;
        case 5:
            showFormat();
            break;
        case 6:
            outofStock();
            break;

        default:
            alert("Invalid Option");
            break;
    }
} while (option !== 0);
