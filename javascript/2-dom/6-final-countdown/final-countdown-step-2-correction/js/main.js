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
    // Initialisation du compteur
    let count = START;

    // Création de l'élément qui affichera le compte à rebours
    const eltDiv = document.createElement('div');
    eltDiv.textContent = START;
    document.getElementById('countdown-list').appendChild(eltDiv);

    // Lancement du chronomètre
    const timer = window.setInterval(function(){

        // Chaque seconde... on décompte de 1
        count--;
        eltDiv.textContent = count;

        // Lorsqu'on arrive à zéro...
        if (count == 0) {

            // ...on stoppe le chronomètre
            window.clearInterval(timer);

            // ... et on supprime l'élément
            eltDiv.remove(eltDiv);
        }

    }, DELAY);
}

/////////////////////
// CODE PRINCIPAL //
///////////////////
document.addEventListener('DOMContentLoaded', function(){

    const button = document.querySelector('header button');
    button.addEventListener('click', onClickAddCountdownButton);
});