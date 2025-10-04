function displayCart(){
    let cart = JSON.parse(localStorage.getItem('carts')) || [];
    console.log(cart);
    let allProducts = document.querySelector("#addToCart");

    allProducts.innerHTML = "";

    cart.forEach(function (value, index, array){
        console.log(value);
        allProducts.innerHTML += `
            <div class="eachProduct" data-aos="fade-up">
                <img src="${value.image}" alt="${value.title}">
                <h5>${value.title}</h5>
                <h5>${value.id}</h5>
                <p>: ${value.price}</p>
        `;
    })

}

displayCart()

function clearCart(){
    localStorage.clear();

    displayCart();
}