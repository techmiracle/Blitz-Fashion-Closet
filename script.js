const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");


if (hamburger) {
	hamburger.onclick = function(){
		navMenu.classList.toggle("active");
	};
}

function openVideo(videoSrc){

    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");

    modal.style.display = "flex";
    modalVideo.src = videoSrc;
    modalVideo.play();

}

function closeVideo(){
	const modal = document.getElementById("videoModal");
	const modalVideo = document.getElementById("modalVideo");
	
	modal.style.display = "none";
	modalVideo.pause();
	modalVideo.src = "";
}
function addLookToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({
name: name,
price: price,
quantity: 1
});

localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name + " added to cart");
}
  
	
function updateCartCount(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let count = 0;

cart.forEach(item=>{
count += item.quantity;
});

let cartCount = document.getElementById("cart-count");

if(cartCount){
cartCount.innerText = count;
}

}



localStorage.setItem("cart", JSON.stringify(cart));

updateCartCount();

alert(name + " added to cart");
}
let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

scrollBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

let modal = document.getElementById("productModal");
let modalImg = document.getElementById("modalImage");
if (closeBtn){
	closeBtn,onclick = function(){
		modal.style.display = "none";
	}
} 

document.querySelectorAll(".product img").forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function(){
    modal.style.display = "none";
}

function openVideo(video){

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

modal.style.display = "flex";

modalVideo.src = video.querySelector("source").src;

modalVideo.play();

}

document.querySelector(".close-modal").onclick = function(){

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");

modal.style.display = "none";
modalVideo.pause();
modalVideo.src="";

};