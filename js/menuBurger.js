const btnBurger = document.getElementById("topnav_hamburger_icon");
const menu = document.getElementById("topnav_responsive_menu");
const icon = document.getElementById("topnav_hamburger_icon");
const root = document.getElementById("home");
const lienNav = document.querySelectorAll("nav ul li a");

function afficheMenu(){
    
    if (menu.className === "open") {
        menu.className = "";                    
        icon.className = "";
        // root.style.overflowY = "";
    } else {
        menu.className = "open";
        icon.className = "open";
        // root.style.overflowY = "hidden";
    }
}

// https://iridescent.dev/posts/web/creer-un-menu-hamburger


// gestion du click sur les liens du menu
// fermeture du menu burger

function cacheMenu(){
    console.log('click');
    if (menu.className === "open") {
        menu.className = "";                    
        icon.className = "";
        //root.style.overflowY = "";
    } else {
        menu.className = "open";
        icon.className = "open";
        //root.style.overflowY = "hidden";
    }
}

for (let element of lienNav) {
    element.addEventListener("click", cacheMenu);
}

btnBurger.addEventListener('click', afficheMenu);
