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

    const clonedArray = [];
    array.forEach(el => {
        clonedArray.push(callback(el))
    });

    return clonedArray;
}

console.log(map([1,2,3,4], addTwo)); // [3,4,5,6]

/**
 * Exercice 4
 * Créez une fonction nommée `forEach` qui prend un tableau et une callback, et exécute cette callback sur chaque élément du tableau. `forEach` ne doit rien retourner.
 * @param {Array} array
 * @param {Function} callback
 * @return {void}
 */

function forEach (array, callback) {
    if (!Array.isArray(array)) throw new TypeError ("array argument must be an array");

    for (let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }

}

// code d'exemple

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];

forEach(letters, function(char) {
  alphabet += char;
});

console.log(alphabet); // 'abcd'

/**
 * Exercice 5
 * Dans l’exercice 3, vous avez créé une fonction nommée `map`. Dans ce défi, vous allez reconstruire la fonction `map` en créant une fonction nommée `mapWith`. 
 * Cette fois-ci, vous devrez utiliser `forEach` à l'intérieur de `mapWith` au lieu d'utiliser une boucle `for
 * @param {Array} array
 * @param {Function} callback
 * @returns {Array}
 */

function mapWith (array, callback) {
    if (!Array.isArray(array)) throw new TypeError("array argument must be an array");

    const clonedArray = [...array];
    forEach(clonedArray, callback);

    return clonedArray;
}

console.log(mapWith([1,2,3], addTwo));


/**
 * Exercice 6
 * Créez une fonction nommée `reduce` qui prend un tableau et réduit ses éléments à une **seule valeur**. 
 * Par exemple, elle peut additionner tous les nombres, les multiplier, ou effectuer n'importe quelle opération que vous pouvez définir dans une fonction.
 * @param {Array} array
 * @param {Function} callback
 * @param {Number} initialValue
 * @returns {Number}
 * */

function reduce (array, callback, initialValue) {
    if (!Array.isArray(array)) throw new TypeError("array argument must be an array");
    
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    
    return accumulator;
}

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }

console.log(reduce(nums, add, 0)); // -> 8

/*

### Voici comment cela fonctionne :

La fonction possède une **"valeur d'accumulation"** (un accumulateur) qui commence avec la valeur `initialValue` 
et accumule le résultat de chaque itération.

1. On parcourt le tableau en passant l'accumulateur et l'élément actuel du tableau comme arguments à la fonction callback.
2. La valeur de retour de la callback devient la nouvelle valeur de l'accumulateur
3. L'itération suivante s'exécute avec cette nouvelle valeur.

Exemple détaillé :
Dans l'exemple ci-dessus, l'accumulateur commence à 0.
- add(0, 4) est appelée : l'accumulateur vaut maintenant 4.
- add(4, 1) est appelée : l'accumulateur vaut maintenant 5.
- Enfin, add(5, 3) est appelée : l'accumulateur vaut 8, ce qui est la valeur finale retournée.

*/

/**
 * Exercice 7
 * Construisez une fonction nommée `objOfMatches` qui accepte deux tableaux et une callback. `objOfMatches` doit construire un objet et le retourner.
 * Pour construire cet objet, la fonction doit tester chaque élément du premier tableau en lui appliquant la callback pour vérifier si le résultat 
 * correspond à l'élément du second tableau (au même index).
 * S'il y a une correspondance :
 * - L'élément du premier tableau devient une clé dans l'objet.
 * - L'élément du second tableau devient la valeur correspondante.
 * 
 * Exemple de logique :
 * 
 * Si le premier tableau est `['hello', 'hola', 'bonjour']`, le second est `['HELLO', 'Hola', 'BONJOUR']` et que le callback met le texte en majuscules :
 * - callback('hello') -> 'HELLO'. Ça correspond ! On ajoute { hello: 'HELLO' } à l'objet.
 * - callback('hola') -> 'HOLA'. Ça ne correspond pas à 'Hola'. On passe.
 * - callback('bonjour') -> 'BONJOUR'. Ça correspond ! On ajoute { bonjour: 'Bonjour' }
 */

/**
 * @param {Array} array1 
 * @param {Array} array2 
 * @param {Function} callback 
 */
function objOfMatches (array1, array2, callback) {
    if (!Array.isArray(array1)) throw new TypeError("array1 argument must be an array");
    if (!Array.isArray(array2)) throw new TypeError("array2 argument must be an array");
    if (array1.length == array2.length) throw new Error("array1 and array2 must have the same length");

    const obj = {};

    for (let i = 0; i < array1.length; i++) {
        if (callback(array1[i]) === array2[i]) {
            obj[array1[i]] = array2[i];
        }
    }
    
    return obj;
}

const array1 = ['hello', 'hola', 'bonjour'];
const array2 = ['HELLO', 'Hola', 'BONJOUR'];
console.log();

/**
 * Exercice 8
 * Créez une fonction nommée `majority` qui accepte un tableau et une callback. La callback retournera soit `true`, soit `false`.
 * `majority` doit parcourir le tableau et exécuter la callback sur chaque élément jusqu'à ce qu'il soit possible de déterminer 
 * si la majorité des valeurs de retour de la callback sont `true`.
 * - Si le nombre de résultats true est strictement supérieur à la moitié des éléments, la fonction retourne true
 * - Si le nombre de true est égal ou inférieur au nombre de false, majority doit retourner false.
 *
 * Note : Pour que ce soit une "majorité", il faut que le nombre de true soit supérieur à 50 % de la taille totale du tableau.
 */

function majority (array, callback) {
    if (!Array.isArray(array)) throw new TypeError("array argument must be an array");
    
    let trueCount = 0;
    let falseCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            trueCount++;
        } 
        else {
            falseCount++;
        }
    }
    return trueCount > falseCount;
}

const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // devrait retourner: true
console.log(majority([2, 3, 4, 5], isOdd)); // devrait retourner: false

/**
 * Exercice 9
 * Créez une fonction nommée `countBy` qui accepte un tableau et une callback, et qui retourne un objet.
 * countBy doit parcourir le tableau et exécuter la callback sur chaque élément.
 * - Chaque valeur de retour de la callback sera enregistrée comme une clé dans l'objet
 * - La valeur associée à chaque clé sera le nombre de fois que cette valeur de retour particulière a été obtenue
 * 
 * Exemple concret :
 * Si vous avez un tableau [1, 2, 3] et une callback qui détermine si le nombre est 'pair' ou 'impair', 
 * l'objet résultant pourrait ressembler à ceci : { impair: 2, pair: 1 }.
 */

function countBy (array, callback) {
    const obj = {};

    for (let i = 0; i < array.length; i++) {
        const key = callback(array[i]);
        if (obj[key]) {
            obj[key]++;
        }
        else {
            obj[key] = 1;
        }
    }

    return obj;
}

console.log(countBy([1, 2, 3, 4, 5], function(num) {
	if (num % 2 === 0) return 'even';
	else return 'odd';
})); // devrait retourner: { odd: 3, even: 2 }