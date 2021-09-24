'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function onKeyDownDocument(event)
{
	event.preventDefault();

	const key = event.key;
	const code = event.code;

	const container = document.querySelector('#playground span')

	container.innerHTML = `<b>Code</b>: ${code} - <b>Key</b> : ${key}`;
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

/**
 * Code principal : code JavaScript exécuté dès le chargement de la page
 *
 * Pour s'assurer que le DOM est chargé, 3 solutions :
 *    --> soit on place la balise <script> tout en bas du <body> dans le code HTML
 *    --> soit on ajoute l'attribut defer à la balise script pour différer son exécution après le chargement du DOM
 *    --> soit on écoute l'événement 'DOMContentLoaded' sur le document entier. Cet événement est lancé lorsque le navigateur
 *        a terminé de constuire le DOM.
 *
 *    On peut bien sûr combiner plusieurs de ces solutions pour plus de robustesse
 *
 * 	  https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded
 *
 *    On utilise en général comme fonction gestionnaire d'événement associée une fonction anonyme car
 *    on ne l'appellera jamais ailleurs nous-même.
*/
document.addEventListener('DOMContentLoaded', function() {

	document.addEventListener('keydown', onKeyDownDocument);
});



