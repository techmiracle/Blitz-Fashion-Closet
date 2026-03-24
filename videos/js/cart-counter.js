function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalQuantity = 0;

    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    const cartCountElement = document.getElementById("cart-count");

    if (cartCountElement) {
        cartCountElement.textContent = totalQuantity;
    }
}

updateCartCount();