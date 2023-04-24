/* Affichage  de la barre de navigation de coté */
/* uniquement mode écran */

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

/* Gestion du défilement de la page, effet : "smooth" */

/* tableau qui contient les liens de la barre NAV */
const lienMenu = document.querySelectorAll('nav ul li');


/* tableau qui contient les écrans de ma page */
ecranAffiche = document.querySelectorAll('.ecran');

for (let i=0; i<lienMenu.length; i++) {
    lienMenu[i].addEventListener('click',
        function(){positionnerEcran(i);});
        lienMenu[i].addEventListener('mouseover', function(){changerCurseur(i);});
}


/* tableau qui contient les écrans de ma page */
ecranAffiche = document.querySelectorAll('.ecran');
// Fonctions
function positionnerEcran(numEcran) {
    ecranAffiche[numEcran].scrollIntoView(
        {block: 'end',
        inline: 'start',
        behavior: 'smooth'}
    );
}