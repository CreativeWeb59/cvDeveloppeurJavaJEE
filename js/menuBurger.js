const btnBurger = document.getElementById("topnav_hamburger_icon");
const menu = document.getElementById("topnav_responsive_menu");
const icon = document.getElementById("topnav_hamburger_icon");
const root = document.getElementById("home");
const lienNav = document.querySelectorAll("nav ul li a");

function afficheMenu(){
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

// https://iridescent.dev/posts/web/creer-un-menu-hamburger


// gestion du click sur les liens du menu
// fermeture du menu burger

function cacheMenu(){
    if (!menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

for (let element of lienNav) {
    element.addEventListener("click", cacheMenu);
}

// btnBurger.addEventListener('click', afficheMenu);

// btnBurger.addEventListener("click", (Event)=>{
//     console.log("Click");
// });

btnBurger.addEventListener('click', event => {
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
  });