const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);

// El operador ?? se llama "nullish coalescing operator" o "operador de fusión nula" en JavaScript. Fue introducido en ECMAScript 2020 (ES11) y se utiliza para proporcionar un valor de respaldo en caso de que una expresión sea nula (null) o no definida (undefined), pero no en otros casos, como cuando la expresión es igual a 0, false, una cadena vacía ("") u otros valores "falsos".