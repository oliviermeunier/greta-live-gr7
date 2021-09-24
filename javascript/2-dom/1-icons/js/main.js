'use strict'; // Mode strict de JavaScript

////////////////////////////////////////////////////////////
// 1. les animaux doivent être rouges SAUF skippy le chien //
////////////////////////////////////////////////////////////

// Sélection de tous les éléments qui possèdent la classe 'animal'
const animals = document.querySelectorAll('.animal');

// const animals = document.querySelectorAll('.animal:not(#skippy)');

// Parcours de ces éléments avec une boucle for
// for (let i = 0 ; i < animals.length ; i++) {
for (const animal of animals ) {

    if (animal.id != 'skippy') {

        // On lui ajoute la classe 'red'
        animal.classList.add('red');
    } else {
        animal.classList.add('blue');
    }
}

/////////////////////////////////////////
// 2. les véhicules doivent être verts //
/////////////////////////////////////////

// Sélection de tous les éléments qui possèdent la classe 'vehicule'
const vehicles = document.getElementsByClassName('vehicle');

// Parcours de ces éléments avec une boucle for
for (let i = 0 ; i < vehicles.length ; i++) {

    // Ajout de la classe 'green' à l'élément courant
    vehicles[i].classList.add('green');
}

///////////////////////////////////////////////
// 3. toutes les icones doivent être grandes //
///////////////////////////////////////////////

// Sélection de tous les icones
const icons = document.getElementsByTagName('i');

// Parcours de ces éléments avec une boucle for
for (let i = 0 ; i < icons.length ; i++) {

    // On remplace le cas échéant la classe 'fa-2x' par la classe 'fa-4x'
    icons[i].classList.replace('fa-2x', 'fa-4x');
}

////////////////////////////////////
// 4. la carotte doit être orange //
////////////////////////////////////

// Sélection de l'élément qui possède la classe 'fa-carrot'
const carrot = document.querySelector('.fa-carrot');

// Ajout de la classe 'orange'
carrot.classList.add('orange');

/////////////////////////////////////////////////
// 5. le cookie doit se transformer en carotte //
/////////////////////////////////////////////////

// Sélection de l'élément qui possède la classe 'fa-cookie-bite'
const cookie = document.querySelector('.fa-cookie-bite');

// Remplacement de la classe 'fa-cookie-bite' par la classe 'fa-carrot'
cookie.classList.replace('fa-cookie-bite', 'fa-carrot');

// Ajout de la classe 'orange'
cookie.classList.add('orange');