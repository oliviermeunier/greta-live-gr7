# The final countdown - Step 2

## Objectifs

Il va maintenant être possible de créer autant de bombes qu'on souhaite ! 

Au clic sur le bouton ***+*** vous devez créer un élément ***div*** qui affichera un compte à rebours. Cette balise devra être insérée dans l'élément 
qui possède l'id ***countdown-list***.

- Le compte à rebours se lance lors du clic sur le bouton ***+***, il se décrémente chaque seconde.
- A chaque clic sur le bouton ***+*** un nouveau compte à rebours apparaît. Les différentes bombes sont indépendantes les unes des autres.
- Lorsqu'un compte à rebours arrive à 0, la bombe explose (l'élément disparaît)

## Remarques

- Il est possible en JavaScript de créer de nouveaux éléments qui n'existent pas au départ dans le code source, de leur donner les attributs souhaités, 
puis de les insérer dans le document. 

## Objectifs pédagogiques

Cet exercice va vous permettre de travailler les compétences suivantes :

1. Gestion de l'événement ***DOMContentLoaded*** pour être certain que le DOM est chargé avant de le manipuler
2. Mise en place d'un chronomètre
3. Arrêt d'un chronomètre
4. Suppression d'un élément du DOM
5. Création d'un élément
6. Insertion d'un élément dans le document

## Mockups

![Capture](.resources/img/capture-1.png)

## Ressources

### Evénement DOMContentLoaded

[DOMContentLoaded [MDN]](https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded)

### Les chronomètres 

[Window timers [MDN]](https://developer.mozilla.org/fr/docs/Web/API/WindowTimers)

### Suppression d'un élément du DOM

[element.removeChild [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild)
[element.parentNode [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/parentNode)

### Création et insertion d'un élément

[document.createElement [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)
[element.appendChild [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild)
[element.insertBefore [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/insertBefore)