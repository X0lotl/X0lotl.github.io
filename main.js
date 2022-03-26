let oldScrollPosition = 0;
let newScrollPosition;

let activatedNavButton = document.getElementById("homePageButton");

const navbarBorder = document.getElementById("navbarBorder");

function activateNavButton(navButton) {
    if (activatedNavButton != navButton) {
        activatedNavButton.classList.remove("navbar-button-activated");
        navButton.classList.add("navbar-button-activated");
        document.getElementById(navButton.id.replace("Button", "")).classList.remove("invisible");
        document.getElementById(activatedNavButton.id.replace("Button", "")).classList.add("invisible");
        activatedNavButton = navButton;
    }
}

const navbarButtons = document.getElementsByClassName("nav-button");

for (let i = 0; i < navbarButtons.length; i++) {
    navbarButtons[i].addEventListener("click", function () {
        activateNavButton(navbarButtons[i]);
    })
}

document.addEventListener("scroll", function () {
    newScrollPosition = document.documentElement.scrollTop;

    if (oldScrollPosition < newScrollPosition) {
        closeNavbar();
    } else {
        openNavBar();
    }

    oldScrollPosition = newScrollPosition;
});

navbarBorder.onmouseover = function () {
    openNavBar();
};

function openNavBar() {
    document.getElementById("navbar").classList.remove("invisiable");
    document.getElementById("mainPages").classList.remove("main-page-go-up");
}

function closeNavbar() {
    window.setTimeout(function () {
        document.getElementById("navbar").classList.add("invisiable");
        document.getElementById("mainPages").classList.add("main-page-go-up");
    }, 200);
}