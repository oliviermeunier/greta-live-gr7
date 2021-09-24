'use strict';   // Mode strict du JavaScript

//////////////////////////////////////
// CONSTANTES & VARIABLES GLOBALES //
////////////////////////////////////

const START = 9; //Chiffre auquel démarrent les comptes à rebours
const DELAY = 1000; // Délai du décompte : 1000 ms = 1 sec

///////////////////////////////
// DECLARATION DE FONCTIONS //
/////////////////////////////

/**
 * Gestionnaire d'événement au clic sur le bouton "+"
 */
function onClickAddCountdownButton()
{
    // Création de l'élément qui affichera le compte à rebours
    const eltDiv = document.createElement('div');
    eltDiv.classList.add('countdown');
    eltDiv.innerHTML = 'Click<br>on me';

    // Insertion de l'élément dans la liste
    document.getElementById('countdown-list').appendChild(eltDiv);

    /**
     * Installation d'un gestionnaire d'événement au click sur l'élément <div> qui représente une bombe
     * Un troisième paramètre à la fonction addEventListener() nous permet d'ajouter un objet contenant des options, dont l'option "once"
     * https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
     * => Ainsi l'événement 'click' ne sera déclenché qu'une seule fois (pour ne pas relancer un compteur à chaque fois qu'on clique sur la même bombe)
     */
    eltDiv.addEventListener('click', onClickBomb, {once: true});
}

function onClickBomb(event)
{
    // On récupère l'élément <div> qui a été cliqué
    const eltDiv = event.currentTarget;

    // On démarre le compte à rebours
    let count = START;

    // Affichage initial du compteur
    eltDiv.textContent = count;

    // Lancement du chronomètre
    const timer = window.setInterval(function () {

        // Mise à jour du compteur
        count--;
        eltDiv.textContent = count;

        // Si on arrive à zéro...
        if (count == 0) {

            // ... on stoppe le compteur
            window.clearInterval(timer);

            // ... et on supprime l'élément
            eltDiv.remove();
        }
    }, DELAY);

    // On ajoute sur l'élément la classe 'started'
    eltDiv.classList.add('started');
}


/////////////////////
// CODE PRINCIPAL //
///////////////////
document.addEventListener('DOMContentLoaded', function(){

    // Installation du gestionnaire d'événement au clic sur le bouton "+"
    const button = document.querySelector('header button');
    button.addEventListener('click', onClickAddCountdownButton);
});