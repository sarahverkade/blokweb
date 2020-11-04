let hamburger = document.querySelector("button img");

let showMenu = document.querySelector("header nav ul:last-of-type");

let buttonClose = document.querySelector("button");

let hideScroll = document.querySelector('body');


hamburger.addEventListener("click", function () {
    showMenu.classList.toggle("showMenu");
    buttonClose.classList.toggle("button-close");
    hideScroll.classList.toggle('hide-scroll');
}, false);

hamburger.addEventListener("click", function myFunction() {
    if (hamburger.style.display === "none") {
        hamburger.style.display = "block";
    } else {
        hamburger.style.display = "none";
    }
}, false);
