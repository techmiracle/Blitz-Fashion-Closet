// Product Database
const products = {
    closet1: {
        name: "Muse Beaded Fringes Dress",
        price: "₦1.100,000",
        image: "images/closet1.PNG",
        description: "A structured premium dinner outfit crafted for confidence and timeless elegance."
    },
    closet3: {
        name: "Casual Fit",
        price: "₦700,000",
        image: "images/closet3.png",
        description: "Modern minimal casual wear designed for effortless everyday style."
    },
    closet2: {
        name: "Couples Fit",
        price: "₦40000 for Groom, 700,000 for bride",
		Bride: "700,000",
        image: "images/closet2.jpeg",
        description: "A coordinated luxury set made for bold expression and shared identity."
    },

	image1: {
        name: "Celestial Knot Gown",
        price: "₦700,000",
		image: "images/closet4.jpeg",
        description: "Enchanting custom gown for a truly unforgottable Staetment."
    },
	
	image0: {
        name: "Aura Dress",
        price: "₦600,000",
		image: "images/closet6.jpeg",
        description: "The Aura dress flows with subtle charm, designed to highlight your natural beauty. light, graceful, and captivating. Perfect for moments where you want to feel effortlesly radiant."
    },
};

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products[productId];

if (product) {
    document.getElementById("product-img").src = product.image;
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-desc").textContent = product.description;
}

						// CART SYSTEM
const addToCartBtn = document.querySelector(".add-to-cart");

if (addToCartBtn && product) {
    addToCartBtn.addEventListener("click", () => {

        const sizeSelect = document.getElementById("size-select");
        const selectedSize = sizeSelect ? sizeSelect.value : null;

        if (!selectedSize) {
            alert("Please select a size 👕");
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if same product with same size already exists
        const existingProduct = cart.find(
            item => item.id === productId && item.size === selectedSize
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                size: selectedSize,
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Added to cart 🛒");
    });
}
