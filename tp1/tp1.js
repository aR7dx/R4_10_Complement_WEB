// Exercices Callbacks et Higher Order Functions

/**
 * Exercice 1
 * Créez une fonction `addTwo` qui accepte un argument et lui ajoute 2.
 * @param {Number} num 
 * @returns {Number}
 */

function addTwo (num) {
   if (typeof num === "number") {
     return num + 2;
   } 

  throw new TypeError("num argument must be a number");
}

console.log(addTwo(2));
//console.log(addTwo('a')); // throw a type error

/**
 * Exercice 2
 * Créez une fonction `addS` qui accepte un argument et lui ajoute un "s" à la fin
 * @param {String} word 
 * @returns {String}
 */

function addS (word) {
    if (typeof word === "string") {
        return word + "s";
    }
    throw new TypeError("word argument must be a string");
}

console.log(addS("pizza"));
//console.log(addS(5)); // throw a type error

/**
 * Exercice 3
 * Créez une fonction nommée `map` qui prend deux arguments :
 * 1. Un tableau de nombres (une liste de nombres).
 * 2. Une fonction "callback" — une fonction qui est appliquée à chaque élément du tableau (à l'intérieur de la fonction map).
 * Faites en sorte que map retourne un nouveau tableau rempli avec les nombres résultant de l'application de la fonction "callback" sur chaque élément du tableau d'entrée
 * @param {Array} array
 * @param {Function} callback
 * @returns {Array}
 */

function map (array, callback) {
    if (!Array.isArray(array)) throw new TypeError("array argument must be an array");

    const clonedArray = [...array];
    for (let i = 0; i < clonedArray.length; i++) {
        clonedArray[i] = callback(clonedArray[i]);
    }

    return clonedArray;
}

console.log(map([1,2,3,4], addTwo)); // [3,4,5,6]