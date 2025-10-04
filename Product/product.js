let allProducts = document.querySelector('#allProducts');


fetch('https://dummyjson.com/products', {
    method: "GET"
})
.then(function(response){
    // console.log(response);
    return response.json();
})
.then(function(data){
    console.log(data);

    let products = data.products;
    console.log(products);

    allProducts.innerHTML = products.map(function(value, index, array){
        // console.log(value);
        return `
        <div class="eachProduct" data-aos="fade-up">
            <img src="${value.thumbnail}" alt="${value.title}">
            <h5>${value.title}</h5>
            <p>${value.price}</p>
            <button onclick="addToCart(${value.id}, '${value.title}', '${value.thumbnail}', ${value.price})">Add to Cart</button>
        </div>
        `;

    })

})
.catch(function(error){
    console.log("Something went wrong");
    alert('Error fetching product');
    console.log(error);
})
.finally(function(){
    console.log("Completed")
})


function addToCart(id, title, image,price) {
alert("product added to cart");

const cartItem = JSON.parse(localStorage.getItem("carts")) || [];
let productcart = {
    id: id,
    title: title,
    image: image,
    price: price,
};

cartItem.push(productcart);
localStorage.setItem("carts", JSON.stringify(cartItem,));

console.log(JSON.parse(localStorage.getItem("carts")).length);
console.log(JSON.parse(localStorage.getItem("carts")));
}
