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
}

/**
 * Gestionnaire d'événement avec délégation sur la liste #countdownList
 * pour gérer le click sur les bombes
 * @param {MouseEvent} event
 */
function onClickCountdownList(event)
{
    /**
     * L'événement 'click' va être déclenché si on clique sur l'élément #countdownList
     * ou bien sur n'importe quel élément qui se trouve à l'intérieur. Ce qui nous intéresse ici
     * ce sont les éléments à l'intérieur qui représentent les bombes et qui possèdent la classe 'countdown'
     *
     * On va donc tester si l'élément qui a été réellement cliqué possède la classe 'countdown'
     *
     * L'objet event récupéré en paramètre contient une propriété target et une propriété currentTarget
     *
     *      --> event.currentTarget représente l'élément sur lequel a été installé le gestionnaire d'événement, ici <div id="countdown-list">
     *      --> event.target représente l'élément réellement cliqué
     */
    console.log('[Click] event.currentTarget : ', event.currentTarget);
    console.log('[Click] event.target : ', event.target);

    // On récupère l'élément réellement cliqué
    const clickedElement = event.target;

    // Si l'élément cliqué contient la classe 'countdown'...
    if (clickedElement.classList.contains('countdown')) {

        // Si le compte à rebours sur cet élément n'a pas déjà démarré, c'est-à-dire s'il ne contient pas la classe 'started'
        if (!clickedElement.classList.contains('started')) {

            // On démarre le compte à rebours
            startCountdown(clickedElement);

            // On ajoute sur l'élément la classe 'started'
            clickedElement.classList.add('started');
        }
    }
}

/**
 * Démarre un compte à rebours dans un élément du DOM passé en paramètre
 * @param {HTMLDivElement} element
 */
function startCountdown(element)
{
    let count = START;

    // Affichage initial du compteur
    element.textContent = count;

    // Lancement du chronomètre
    const timer = window.setInterval(function () {

        // Mise à jour du compteur
        count--;
        element.textContent = count;

        // Si on arrive à zéro...
        if (count == 0) {

            // ... on stoppe le compteur
            window.clearInterval(timer);

            /**
             * Remarque : utiliser une fonction anonyme ici en paramètre de window.setInterval() nous permet
             * de connaître la constante timer
             */

            // ... et on supprime l'élément
            element.parentNode.removeChild(element);
        }
    }, DELAY);
}


/////////////////////
// CODE PRINCIPAL //
///////////////////
document.addEventListener('DOMContentLoaded', function(){

    // Installation du gestionnaire d'événement au clic sur le bouton "+"
    const button = document.querySelector('header button');
    button.addEventListener('click', onClickAddCountdownButton);

    /**
     * Installation d'un gestionnaire d'événement au clic sur l'élément #countdownList
     *
     * On fait ce qu'on appelle de la délégation d'événement : pour installer un gestionnaire
     * d'événement sur des éléments du DOM qui n'existent pas encore (les bombes) on l'installe sur
     * un élément parent des futurs éléments, ici la balise avec l'id 'countdownList'
     */
    const countdownList = document.getElementById('countdown-list');
    countdownList.addEventListener('click', onClickCountdownList);
});