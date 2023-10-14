// Funcion normal

function square(num) {
    return num * num;
}

// Arrow function (funcion flecha)

const square = (num) => {
    return num * num;
}

// Arrow function con return explicito

const square = num => num * num;

// Manera mas compacta de hacer una funcion flecha, esta sintaxis se puede utilizar solo cuando se tiene un parametro y un return inmediato.
//Cuando tenemos una logica extensa, lo mejor es hacerlo de la forma tradicional con llaves para indicar que se encuentra dentro la logica.
