// Déclaration d'une variable.
let nombre;

/*
 * La boucle doit au moins s'exécuter une fois pour que la comparaison
 * puisse s'effectuer, il faut donc utiliser un DO ... WHILE.
 */
do {
    nombre = window.prompt('Veuillez saisir un nombre entre 1 et 10 svp.');
}
while(isNaN(nombre) || nombre < 1 || nombre > 10);

/**
 * On lui repose la question tant que sa réponse est incorrecte. Elle peut être incorrecte :
 * - soit parce que ce n'est pas un nombre
 * - soit parce que le nombre est trop petit
 * - soit parce que le nombre est trop grand
 *
 * L'une seulement de ces trois conditions est suffisante pour que la réponse ne soit pas correcte et que l'on doive reposer la question
 * D'ailleurs les 3 conditions ne peuvent pas être toutes les 3 vraies en même temps, un nombre ne peut pas à la fois être plus petit que 1 et plus grand que 10.
 * C'est pourquoi on utilise l'opérateur logique OU et non l'opérateur logique ET
 */

/**
 * La fonction isNaN() permet de savoir si une valeur est un nombre ou plus précisément si une valeur peut être convertie en nombre.
 * isNaN('42') retournera false car à partir de la chaîne de caractères '42' javascript est capable de créer le nombre 42.
 * isNaN('Bonjour') retournera true car javascript est incapable de créer un nombre avec 'Bonjour'
 *
 * Il est intéressant de regarder ce que répond isNaN() avec différentes valeurs : true, false, 'hello', undefined, null, ''
 * Ainsi la chaine vide '' pour javascript peut être convertie en nombre, isNaN('') retournera donc false.
 * Si on demande à javascript de créer un nombre à partir d'une chaîne vide, il créera le nombre 0.
 *
 *  console.log(Number('')); // 0
 *
 * Donc dans notre exemple, si l'utilisateur n'écrit rien, le script va considérer que c'est bien un nombre.
 * Pour éviter ce problème, on utilise la fonction parseFloat() qui elle, à partir d'une chaîne vide, retournera NaN.
 */

document.write('<p>Merci, vous avez saisi <strong>' + nombre + '</strong>.</p>');
