

const cartContainer = document.getElementById("cart-container");
const cartTotal = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART (used by lookbook page) */
function addLookToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name: name,
price: price,
quantity: 1
});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart!");

}

/* REMOVE ITEM */
function removeItem(index) {
cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
renderCart();
}

/* RENDER CART PAGE */
function renderCart() {

if(!cartContainer || !cartTotal) return;

cartContainer.innerHTML = "";
let total = 0;

if (cart.length === 0) {
cartContainer.innerHTML = "<p>Your cart is empty.</p>";
cartTotal.textContent = "";
return;
}

cart.forEach((item, index) => {

const priceNumber = parseInt(String(item.price).replace(/[^0-9]/g,""));
total += priceNumber * item.quantity;

const div = document.createElement("div");

div.innerHTML = `
<h3>${item.name}</h3>
<p>₦${priceNumber.toLocaleString()}</p>
<p>Quantity: ${item.quantity}</p>
<button onclick="removeItem(${index})">Remove</button>
<hr>
`;

cartContainer.appendChild(div);

});

cartTotal.textContent = "Total: ₦" + total.toLocaleString();

}

/* ONLY RUN CART IF ON CART PAGE */
if(cartContainer){
renderCart();
}

/* WHATSAPP CHECKOUT */
const checkoutBtn = document.getElementById("checkout-btn");

if (checkoutBtn) {

checkoutBtn.addEventListener("click", function () {

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
alert("Your cart is empty!");
return;
}

let message = "Hello Blitz Fashion Closet,%0A%0AI would like to order:%0A";

cart.forEach(item => {
message += `• ${item.name} x${item.quantity} - ${item.price}%0A`;
});

message += "%0AThank you.";

const phoneNumber = "2349021576250";

const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

window.open(whatsappURL, "_blank");

});

}