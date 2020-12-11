// Back to top button.
const backTopButton = document.getElementById("bttB");
backTopButton.addEventListener("mouseover", function (e) {
    backTopButton.innerText = "^ ^ ^ ^ ^ ^ ^ ^ ^";
}, false);
backTopButton.addEventListener("mouseout", function (e) {
    backTopButton.innerText = "Back to top";
}, false);

function myFunctionC() {
    document.getElementById("myDropdownC").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtnC')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentC");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunctionS() {
    document.getElementById("myDropdownS").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtnS')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentS");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunctionG() {
    document.getElementById("myDropdownG").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtnG')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentG");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunctionP() {
    document.getElementById("myDropdownP").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtnP')) {
        var dropdowns = document.getElementsByClassName("dropdown-contentP");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}