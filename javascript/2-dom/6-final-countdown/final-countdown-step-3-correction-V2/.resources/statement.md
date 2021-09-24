# The final countdown - Step 3

## Objectifs

Les bombes que l'on crée ne s'amorceront que lorsqu'on cliquera dessus ! 

Au clic sur le bouton ***+*** vous devez créer un élément ***div*** qui affichera une bombe. Le compte à rebours ne se lancera qu'une fois un click effectué sur la bombe pour l'amorcer. Au départ, les bombes porteront l'inscription "Click on me".
 
- Au clic sur le bouton ***+*** vous devez créer et afficher un élément ***div*** avec la classe ***countdown***.
- Au clic sur une bombe, le compte à rebours démarre sur celle-ci, vous devez ajouter la classe ***started*** à l'élément.
- Lorsqu'un compte à rebours arrive à 0, la bombe explose (l'élément disparaît)
- **Attention** : si on clique sur une bombe qui est déjà amorcée, le clic n'a plus d'effet

## Remarques

Pour gérer des événements sur des éléments qui n'existent pas encore au chargement de la page, il existe 2 solutions :

- installer le gestionnaire d'événement ***après*** la création de l'élément
- utiliser la technique de la ***délégation d'événement*** : installer le gestionnaire d'événement sur un élément parent qui englobe les éléments qui nous intéressent.
Puis dans le gestionnaire d'événement, tester l'élément réellement cliqué. 

## Objectifs pédagogiques

Cet exercice va vous permettre de travailler les compétences suivantes :

1. Gestion de l'événement ***DOMContentLoaded*** pour être certain que le DOM est chargé avant de le manipuler
2. Mise en place d'un chronomètre
3. Arrêt d'un chronomètre
4. Suppression d'un élément du DOM
5. Création d'un élément
6. Insertion d'un élément dans le document
7. La délégation d'événement
8. Récupération de l'événement dans un gestionnaire d'événement
9. Récupérer l'élément réellement cliqué

## Mockups

![Capture](.resources/img/capture-1.png)

## Ressources

### Evénement DOMContentLoaded

- [DOMContentLoaded [MDN]](https://developer.mozilla.org/fr/docs/Web/Events/DOMContentLoaded)

### Les chronomètres 

- [Window timers [MDN]](https://developer.mozilla.org/fr/docs/Web/API/WindowTimers)

### Suppression d'un élément du DOM

- [element.removeChild [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild)
- [element.parentNode [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/parentNode)

### Création et insertion d'un élément

- [document.createElement [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)
- [element.appendChild [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild)
- [element.insertBefore [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Node/insertBefore)

### Délégation d'événement

- [Délégation [Blog David Walsh]](https://davidwalsh.name/event-delegate)
- [Délégatoin [javascript.info]](https://javascript.info/event-delegation)

### Gestion des événements

- [Objet event [javascript.info]](https://javascript.info/introduction-browser-events#event-object)
- [Event.target [MDN]](https://developer.mozilla.org/fr/docs/Web/API/Event/target)
- A ne pas confondre avec [Event.currentTarget](https://developer.mozilla.org/fr/docs/Web/API/Event/currentTarget)