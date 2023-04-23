const nav = document.querySelector('.nav')
const navCote = document.getElementById("menu-cote");

window.addEventListener('scroll', fixNav)

function fixNav(){
    if((window.scrollY > nav.offsetHeight + 200) && (screen.width >= 1024)){
        // nav.classList.add('active')
        navCote.style.display="block";
    } else {
        navCote.style.display="none";
    }
}
