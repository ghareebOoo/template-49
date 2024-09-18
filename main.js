let img = document.querySelector(".img");
let body = document.querySelector("body");
let myPurchase = document.querySelector(".buying");


function phones(phone) {
    localStorage.setItem("myPhone", phone);
    img.src = phone; 
   
}


function colors(color) {
    localStorage.setItem("myColor", color);
    body.style.backgroundColor = color;
}


body.style.backgroundColor = localStorage.getItem("myColor");
img.src = localStorage.getItem("myPhone");





