'use strict';   // Mode strict du JavaScript

// Déclaration de constantes
const PIERRE = 'pierre';
const CISEAUX = 'ciseaux';
const FEUILLE = 'feuille';

// Déclaration de variables
let computer;
let player;

// Récupération du choix du joueur.
player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseaux ?');

// Conversion du choix du joueur en minuscules.
player = player.toLowerCase();

document.write("<p>Vous avez choisi : <strong>" + player + '</strong></p>');

// Récupération d'un nombre aléatoire entre 0 inclu et 1 exclu.
const random = Math.random();

if(random < 1 / 3) {          // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
    computer = PIERRE;
}
else if(random < 2 / 3) {    // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
    computer = FEUILLE;
}
else {                       // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
    computer = CISEAUX;
}

document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if(computer == player) {
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
}
else {
    // Le joueur et l'ordinateur n'ont pas choisi la même chose, la bataille commence !

    switch(player) {

        case CISEAUX:
        if(computer == PIERRE) {
            document.write('<p>La pierre écrase les ciseaux : vous perdez !</p>');
        }
        else { // computer == 'feuille'
            document.write('<p>La feuille est découpée par les ciseaux : vous gagnez !</p>');
        }
        break;

        case FEUILLE:
        if(computer == PIERRE) {
            document.write('<p>La pierre est enveloppée par la feuille : vous gagnez !</p>');
        }
        else { // computer == 'ciseaux'
            document.write('<p>Les ciseaux découpe la feuille : vous perdez !</p>');
        }
        break;

        case PIERRE:
        if(computer == FEUILLE) {
            document.write('<p>La feuille enveloppe la pierre : vous perdez !</p>');
        }
        else { // computer == 'ciseaux'
            document.write('<p>Les ciseaux est écrasé par la pierre : vous gagnez !</p>');
        }
        break;
    }
}
