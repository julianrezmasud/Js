function addtocart(a) {
    cart.push({ ...categories[a] });

    Toastify({
        text: "Movie Added!",
        duration: 1000,
    }).showToast();

    localStorage.setItem("cart", (JSON.stringify(cart)))

    displaycart();

}


function delElement(a) {
    cart.splice(a, 1);

    localStorage.setItem("cart", (JSON.stringify(cart)))

    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    //console.log(cart)
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            let { img, name, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${img}>
                </div>
                <p style='font-size:12px;'>${name}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }

}
