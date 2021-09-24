'use strict';   // Mode strict du JavaScript

// Soit la classe suivante
const students = [
    {
        firstname: 'Claire',
        lastname: 'Jollet',
        birhtDate: '2005-05-12',
        grades: [14,15,14,14,16,12]
    },
    {
        firstname: 'Léo',
        lastname: 'Chapelier',
        birhtDate: '2004-05-12',
        grades: [10,11,9,10,12,8]
    },
    {
        firstname: 'Oscar',
        lastname: 'Wilde',
        birhtDate: '1854-09-16',
        grades: [18,17,20,18,19,17]
    },
];

// On parcourt le tableau d'élèves
for(let indexStudents = 0; indexStudents < students.length; indexStudents++){

    // Pour chaque élève... on calcule sa moyenne
    const grades = students[indexStudents].grades;

    let sum = 0;

    for(let indexGrades = 0; indexGrades < grades.length; indexGrades++){

        sum += grades[indexGrades];
    }

    // On calcule la moyenne de l'élève et on la stocke dans une nouvelle propriété
    students[indexStudents].average = Math.round((sum / grades.length) * 100) / 100;
}

console.log(students);

// Affichage
for(let indexStudents = 0; indexStudents < students.length; indexStudents++){

    const currentStudent = students[indexStudents];

    document.write('<p>La moyenne de ' + currentStudent.firstname + ' ' + currentStudent.lastname + ' est : <em>' + currentStudent.average + '</em></p>');
}