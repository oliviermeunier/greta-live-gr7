'use strict'; // Mode strict de JavaScript

///////////////////////////////
// DECLARATION DE FONCTIONS //
/////////////////////////////
function onClickShowHideButton()
{
    // console.log('On a cliqué sur le bouton');

    // Faire apparaître (enlever la classe hide) ou disparaître (ajouter la classe hide) le rectangle bleu
    const hidden = ball.classList.toggle('hide');
    
    // Modifier le texte du bouton
    const text = button.querySelector('#toggle-bouncing-ball span');
    
    // Si le rectangle a disparu, le texte du bouton doit être "Apparais"
    if( hidden == true){
        text.textContent = 'Apparais';
    }
    // Sinon (le rectangle est apparu), le texte du bouton doit être "Disparaît"
    else {
        text.textContent = 'Disparais';
    }
}

function onMouseOverBall()
{
    ball.classList.remove('bouncing');
}

function onMouseOutBall()
{
    ball.classList.add('bouncing');
}

function onClickBall(e)
{
    ball.classList.toggle('selected');
}

function onDoubleClickBall()
{
    ball.classList.toggle('small');
}

/////////////////////
// CODE PRINCIPAL //
//////////////////

// Sélection de l'élément qui possède la classe 'ball' (la balle)
const ball = document.querySelector('.ball');

// Sélection du bouton 'disparais' / 'apparaît'
const button = document.getElementById('toggle-bouncing-ball');

// Installation des gestionnaires d'événements
button.addEventListener('click', onClickShowHideButton);
ball.addEventListener('mouseover', onMouseOverBall);
ball.addEventListener('mouseout', onMouseOutBall);
ball.addEventListener('click', onClickBall);
ball.addEventListener('dblclick', onDoubleClickBall);