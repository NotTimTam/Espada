// Back to top button.
const backTopButton = document.getElementById("bttB");
backTopButton.addEventListener("mouseover", function(e) {
    backTopButton.innerText = "^ ^ ^ ^ ^ ^ ^ ^ ^";
}, false);
backTopButton.addEventListener("mouseout", function(e) {
    backTopButton.innerText = "Back to top";
}, false);