const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");

const navhandler = () => {
hamburger.classList.toggle("open");
nav.classList.toggle("open");
}

hamburger.addEventListener("click" ,navhandler);