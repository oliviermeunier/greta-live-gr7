# Image selector

## Objectifs

- Au clic sur une image dans la liste, celle-ci doit être "sélectionnée". Elle doit alors apparaître avec un liseré vert. 
- Au clic sur une image déjà sélectionnée, celle-ci se désélectionne, le liseré vert disparait.
- A chaque fois qu'une image est sélectionnée ou désélectionnée, le nombre d'images sélectionnées est mis à jour

### Bonus 1 : nombre limite d'images sélectionnables

- Le fonctionnement est le même mais on ne peut sélectionner seulement 3 images. 
- Au lieu d'afficher le nombre d'images sélectionnées, on affichera le nombre d'images qu'il reste à sélectionner. 
- Si 3 images sont déjà sélectionnées et que l'utilisateur clique sur une image pour la sélectionner, un message d'alerte lui indique qu'il ne peut pas sélectionner 
plus de 3 images.

## Remarques

- Allez jeter un oeil dans le fichier de styles , une classe 'selected' est définie. Elle s'appliquera sur les éléments li. Ce sont
donc les éléments li sur lesquels il faudra ajouter la classe 'selected'. C'est également sur les éléments li qu'on installera un gestionnaire d'événement.
- Vous allez sans doute vous heurter à une difficulté : comment savoir quelle image a été cliquée ? 

## Objectifs pédagogiques

Cet exercice va vous permettre de travailler les compétences suivantes :

1. ***Sélection d'éléments*** dans le DOM
2. Manipulation des ***classes*** d'un élément avec l'***API classList***
3. Gestion des ***événements souris*** : click
4. Récupération de l'***élément déclencheur*** d'un événement

## Mockups

![Capture version 1](.resources/img/capture-1.png)
![Capture version 2](.resources/img/capture-2.png)

## Ressources

### Sélection d'éléments

* [document.getElementById [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById)
* [document.querySelector [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)

### API classList

* [API classList [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Element/classList)

### Gestion des événements souris

* [element.addEventListener [MDN]](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)

### Le mot clé this dans un gestionnaire d'événement

***/!\ IMPORTANT /!\***

Dans une fonction gestionnaire d'événement, le mot-clé this représente l'***élément déclencheur***, l'élément du DOM sur lequel on a installé le gestionnaire d'événement. 