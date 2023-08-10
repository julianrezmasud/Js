
let Catalog = " Airplane!\n The Naked Gun\n Ferris Bueller's Day off\n Wayne's Wolrd\n Dum and Dumber\n There's Something about Mery\n Stand by Me\n The Outsiders\n Rain Man\n Schindler's List\n Good Will Hunting\n GoodFellas\n Die Hard\n First Blood\n Predator\n Terminator 2: Jugdment day\n Heat\n The Rock\n The Shining\n The Thing\n A Nightmare on Elm Street\n It\n Scream\n The Silence of The Lambs ";

let Genre = " Comedy\n\n  Airplane!\n The Naked Gun\n Ferris Bueller's Day off\n Wayne's Wolrd\n Dum and Dumber\n There's Something about Mery";

let Genre2 = " Drama\n\n Stand by Me\n The Outsiders\n Rain Man\n Schindler's List\n Good Will Hunting\n GoodFellas";

let Genre3 = " Action\n\n Die Hard\n First Blood\n Predator\n Terminator 2: Jugdment day\n Heat\n The Rock";

let Genre4 = " Horror\n\n The Shining\n The Thing\n A Nightmare on Elm Street\n It\n Scream\n The Silence of The Lambs";

let Decade80 = " 80's Movies\n\n Airplane!\n The Naked Gun\n Ferris Bueller's Day off\n Stand by Me\n The Outsiders\n Rain Man\n Die Hard\n First Blood\n Predator\n The Shining\n The Thing\n A Nightmare on Elm Street";

let Decade90 = " 90's Movies\n\n Wayne's Wolrd\n Dum and Dumber\n There's Something about Mery\n Schindler's List\n Good Will Hunting\n GoodFellas\n Terminator 2: Jugdment day\n Heat\n The Rock\n It\n Scream\n The Silence of The Lambs";



let PriceCheck = " VHS $3\n\n DVD $5";


do {
    option = parseInt(prompt("Enter an Option:\n\n1. Catalog:\n2. Shop by Genre:\n3. Shop by Decade:\n4. Price check:\n\n To Exit enter 0"));

    switch (option) {
        case 0:
            alert("Thank you for your visit! Come back Soon!");
            break;
        case 1:
            alert("See Catalog Below: ");
            showCatalog();
            break;
        case 2:
            alert("Genre list: ");
            showGenre();
            break;
        case 3:
            alert("Decade List: ");
            showDecade();
            break;
        case 4:
            alert("Price List: ");
            showPriceCheck();
            break;

        default:
            alert("Invalid Option");
            break;
    }
} while (option !== 0);


function showGenre() {
    alert(Genre)
    alert(Genre2)
    alert(Genre3)
    alert(Genre4)
}

function showDecade() {
    alert(Decade80)
    alert(Decade90)
}

function showCatalog() {
    alert(Catalog)
}

function showPriceCheck() {
    alert(PriceCheck)
}


