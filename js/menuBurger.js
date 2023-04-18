function afficheMenu(){
    let menu = document.getElementById("topnav_responsive_menu");
    let icon = document.getElementById("topnav_hamburger_icon");
    let root = document.getElementById("home");
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

let btnBurger = document.getElementById("topnav_hamburger_icon");
btnBurger.addEventListener("click", afficheMenu);
// btnBurger.addEventListener("click", (Event)=>{
//     console.log("Click");
// });

// gestion du click sur les liens du menu
// fermeture du menu burger

function cacheMenu(){
    let menu = document.getElementById("topnav_responsive_menu");
    let icon = document.getElementById("topnav_hamburger_icon");
    let root = document.getElementById("home");
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

let lienNav = document.querySelectorAll("nav ul li a");
for (let element of lienNav) {
    element.addEventListener("click", cacheMenu);
}
