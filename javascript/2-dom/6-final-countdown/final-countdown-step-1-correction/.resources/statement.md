# The final countdown - Step 1

## Objectifs

Le but du jeu dans cette première étape est de lancer un compte à rebours au chargement de la page.
3... 2... 1... et la bombe explose et disparaît !

## Remarques

- La bombe est représentée par la balise **div** avec l'id **"countdown"**. Le chiffre du compte à rebours doit appaître à l'intérieur.
- Lorsque le compte à rebours est terminé, qu'il est arrivé à 0, la bombe disparaît. Elle ne sera pas simplement masquée, on souhaite que l'élément du DOM soit réellement supprimé !

## Objectifs pédagogiques

Cet exercice va vous permettre de travailler les compétences suivantes :

1. Gestion de l'événement ***DOMContentLoaded*** pour être certain que le DOM est chargé avant de le manipuler
2. Mise en place d'un chronomètre
3. Arrêt d'un chronomètre
4. Suppression d'un élément du DOM

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