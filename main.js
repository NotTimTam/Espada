// Back to top button.
const backTopButton = document.getElementById("bttB");
backTopButton.addEventListener("mouseover", function(e) {
    backTopButton.innerText = "^ ^ ^ ^ ^ ^ ^ ^ ^";
}, false);
backTopButton.addEventListener("mouseout", function(e) {
    backTopButton.innerText = "Back to top";
}, false);

// Dropdowns on jobs page.
function check(parent) {
    // Grab the desired elements.
    let checkbox = parent.children[0];
    let headerCheck = parent.children[1].children[1];
    let div = parent.children[2];

    // Depending if we are/aren't checked, change above element's css.
    if (checkbox.checked == true) {
        div.style.maxHeight = `200px`;
        headerCheck.style = "transform: rotate(0deg);";
        parent.style = "margin-bottom: 15px; margin-top: 15px; border-radius: 0.5em;";
        checkbox.checked = false;
    } else {
        div.style.maxHeight = "0px";
        headerCheck.style = "transform: rotate(180deg);";
        parent.style = "margin-bottom: 0px; margin-top: 0px;";
        checkbox.checked = true;
    }
}

// Go to applications page.
function apply(element) {
    // Grab the job title and move to the applications page with it.
    let title = element.parentElement.parentElement.children[1].children[0].innerText;

    // Get all the job data and send it too.
    let extradata = element.parentElement.parentElement.children[2].innerHTML.toString();
    
    window.location.href = `apply.html#${title}||${extradata}`;
}