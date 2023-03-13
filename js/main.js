const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const header = document.querySelector("#header");


let isMenuOpen = false

menuBtn.addEventListener("click", () => {
   if (isMenuOpen === false) {
      slideDown()
      header.style.backgroundColor = "#333333";
      isMenuOpen = true;
   }
   else {
      slideUp()
      header.style.backgroundColor = "#333333";
      isMenuOpen = false;
   }

});

function slideUp() {
   menu.style.transition = "all 0.5s ease-in-out";
   menu.style.height = "0px";
}

function slideDown() {
   menu.style.transition = "all 0.5s ease-in-out";
   menu.style.height  = "100%"
}

