'use strict';   // Mode strict du JavaScript

//////////////////////////////////////
// CONSTANTES & VARIABLES GLOBALES //
////////////////////////////////////
let count = 3;
let timer;
let countdownContainer;

///////////////////////////////
// DECLARATION DE FONCTIONS //
/////////////////////////////
function countdown()
{
    // On décrémente le compteur
    count--;

    // On met à jour l'affichage
    countdownContainer.textContent = count;

    // Si on arrive à zéro...
    if (count == 0) {

        // ...on stoppe le chronomètre
        window.clearInterval(timer);

        // On supprime l'élément
        // countdownContainer.parentNode.removeChild(countdownContainer);
        countdownContainer.remove();
    }
}

/////////////////////
// CODE PRINCIPAL //
///////////////////
document.addEventListener('DOMContentLoaded', function(){

    // Sélection de l'élément qui affichera le compte à rebours
    countdownContainer = document.getElementById('countdown');
    countdownContainer.textContent = count;

    // Lancement du chronomètre
    timer = window.setInterval(countdown, 1000);
});