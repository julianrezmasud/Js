const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('container2').innerHTML = categories.map((item) => {
    let { img, name, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${img}></img>
            </div>
        <div class='bottom'>
        <p>${name}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

let cart = JSON.parse(localStorage.getItem("cart")) || [];

displaycart()