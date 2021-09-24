// On copie le contenu du fichier d'entrée dans une chaîne avec les back tics pour gérer les retour chariot
let input = `4
1`;

// On transforme la chaîne de caractères en tableau, 1 ligne => 1 case du tableau input
input = input.split("\n");

////////////////////////////////////////////////////////////////////////////////////////////////////

// Code de l'exercice à coller dans la fonction ContestResponse() sur l'interface pour tester notre code

// Calcul du carburant nécessaire
let result = Number(input[0]) + Number(input[1]) * 5;

// Envoie du résultat en sortie
console.log(result);