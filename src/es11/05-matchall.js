const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Pera, etc';

for(const match of fruit.matchAll(regex)) {
    console.log(match);
};

// String.prototype.matchAll() es un método introducido en ECMAScript 2020 (ES11) que se utiliza para obtener un iterador que proporciona todas las coincidencias de una expresión regular en una cadena de texto. Este método es especialmente útil cuando necesitas obtener todas las coincidencias, incluyendo información sobre los grupos de captura en las coincidencias, de una expresión regular en una cadena.