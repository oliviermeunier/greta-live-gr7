/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

// La variable currentIndex stocke l'indice de l'image actuellement affichée
let currentIndex;

// La variable figures stocke la liste des éléments <figure>
let figures;

// La variable timer contiendra l'identifiant du chronomètre lancé pour la lecture automatique du slider
let timer;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onClickPrevButton()
{
    // On déincrémente l'indice courant
    currentIndex--;

    // Si on arrive en dehors du tableau (si l'indice courant est égal à la taille du tableau)
    if (currentIndex == -1) {

        // ... alors on revient àla première image, c'est-à-dire à l'indice 0
        currentIndex = figures.length - 1;
    }

    refresh();
}

function onClickNextButton()
{
    // On incrémente l'indice courant
    currentIndex++;

    // Si on arrive en dehors du tableau (si l'indice courant est égal à la taille du tableau)
    if (currentIndex == figures.length) {

        // ... alors on revient àla première image, c'est-à-dire à l'indice 0
        currentIndex = 0;
    }

    refresh();
}   

/**
 * Affiche une image aléatoire /!\ différente de l'image actuelle
 */
function onClickRandomButton()
{
    let random;

    do {

        // On tire un nombre aléatoire entre 0 et le dernier indice du tableau...
        random = getRandomInteger(0, figures.length - 1);
    }
    while(random == currentIndex); // Tant que ce nombre est égal à currentIndex

    // On affecte ce nombre aléatoire à currentIndex
    currentIndex = random;

    // On met à jour l'affichage
    refresh();
}

function onClickPlayPauseButton()
{
    // Sélection du picto play-pause
    const picto = document.querySelector('#play-pause i');

    // Si le slider est arrêté...
    if (timer == null) {

        // ... on le lance !
        timer = setInterval(onClickNextButton, 3000);

        // On passe le picto à pause
        picto.classList.replace('fa-play', 'fa-pause');
    } 
    else {

        // Sinon, le slider tourne, on l'arrête
        clearInterval(timer);
        timer = null;

        // On passe le picto à play
        picto.classList.replace('fa-pause', 'fa-play');
    }

}

function onKeyDown(event)
{
    // Quelle action à faire en fonction de la touche du clavier enfoncée ?
    switch (event.code) {

        case 'ArrowLeft':
            onClickPrevButton();
            break;
        
        case 'ArrowRight':
            onClickNextButton();
            break;
    }
}

function refresh()
{
    // On met à jour le code HTML : on supprime la classe active de l'élément qui la possède
    document.querySelector('.active').classList.remove('active');

    // On ajoute la classe active à la nouvelle figure, qui correspond maintenant à l'indice courant
    figures[currentIndex].classList.add('active');
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/**
 * Code principal : code JavaScript exécuté dès le chargement de la page
 *
 * Pour s'assurer que le DOM est chargé (puisqu'on va le manipuler), on écoute l'événement 'DOMContentLoaded'
 * sur le document entier. Cet événement est lancé lorsque le navigateur a terminé de constuire le DOM.
 *
 * https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
 *
 * On utilise en général comme fonction gestionnaire d'événement associée une fonction anonyme car
 * on ne l'appellera jamais ailleurs nous-même.
*/
document.addEventListener('DOMContentLoaded', function(){

    // Au départ l'image affichée est la première (indice 0)
    currentIndex = 0;

    // On sélectionne les éléments <figure>
    figures = document.querySelectorAll('.slider-figure');

    // Identifiant du timer
    timer = null;

    // Sélection des boutons et installation des gestionnaires d'événements
    const nextButton = document.getElementById('next'); 
    const prevButton = document.getElementById('prev');
    
    nextButton.addEventListener('click', onClickNextButton);
    prevButton.addEventListener('click', onClickPrevButton);

    /**
     * On pourrait aussi faire directement : 
     * 
     *      document.getElementById('next').addEventListener('click', onClickNextButton); 
     *      document.getElementById('prev').addEventListener('click', onClickPrevButton);
     * 
     * Ou bien en utilisant la fonction installEventHandler() définie dans le fichier utilities.js :
     * 
     *      installEventHandler('.next','click', onClickNextButton);
     *      installEventHandler('.prev','click', onClickPrevButton);
     */

    installEventHandler('#random','click', onClickRandomButton);
    installEventHandler('#play-pause','click', onClickPlayPauseButton);

    // Ecoute du clavier
    document.addEventListener('keydown', onKeyDown);
});