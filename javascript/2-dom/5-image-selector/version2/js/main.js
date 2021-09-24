'use strict';   // Mode strict du JavaScript

///////////////////////
// DONNEES GLOBALES //
/////////////////////
const MAX_SELECTED = 3;

let numberOfSelectedPhotos;

///////////////////////////////
// DECLARATION DE FONCTIONS //
/////////////////////////////
function onClickListItem()
{
    /*
     * Dans un gestionnaire d'évènements (et uniquement dans ce cas-là) la variable
     * this représente l'objet DOM qui a déclenché l'évènement.
     *
     * Il s'agit donc de la balise <li> sur laquelle on a cliqué.
     *
     *
     */

    // On teste si l'élément déclencheur, this, autrement dit la photo cliquée, contient la classe 'selected'
    switch(this.classList.contains('selected')) {

        // Si oui...
        case true:

            // On la désélectionne en supprimant la classe 'selected'
            this.classList.remove('selected');

            // On décrémente le nombre de photos sélectionnées
            numberOfSelectedPhotos--;

            break;

        // Si non...
        case false:

            // on vérifie qu'il n'y en a pas déjà le nombre maximum de sélectionnées
            if (numberOfSelectedPhotos == MAX_SELECTED) {
                alert('Désolé, vous avez déjà sélectionné ' + MAX_SELECTED + ' images.');
            } else {
                // On la sélectionne en ajoutant la classe 'selected' à l'item cliqué
                this.classList.add('selected');

                // On incrémente le nombre de photos sélectionnées
                numberOfSelectedPhotos++;
            }

            break;
    }

    /*
     * document.querySelectorAll() renvoie un tableau avec autant
     * d'objets DOM manipulables en JavaScript que de balises trouvées.
     *
     * selectedPhotos possède donc une propriété length représentant toutes les
     * photos sélectionnées.
     *
     * Mise à jour du nombre total de photos sélectionnées.
     */
    total.textContent = MAX_SELECTED - numberOfSelectedPhotos;
}

/////////////////////
// CODE PRINCIPAL //
//////////////////

/*
 * Recherche de toutes les balises <li> (les photos)
 * et de la balise <em> (nombre total).
 */
const photos = document.querySelectorAll('.photo-list li');
const total  = document.querySelector('#total em');

// Au départ, on affiche le nombre maximum de photos sélectionnables
total.textContent = MAX_SELECTED;

// Au départ le nombre de photos sélectionnées vaut 0
numberOfSelectedPhotos = 0;

// Installation d'un gestionnaire d'évènement clic sur toutes les balises <li>.
for(let index = 0; index < photos.length; index++){

    photos[index].addEventListener('click', onClickListItem);
}