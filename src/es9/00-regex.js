const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2023-10-15');
console.table(matchers);

// Regex: 
// En JavaScript, "regex" es una abreviatura de "expresiones regulares" o "regular expressions" en inglés. Las expresiones regulares son patrones utilizados para buscar y manipular texto de una manera muy poderosa y flexible. Las expresiones regulares se utilizan para realizar operaciones de búsqueda, coincidencia, reemplazo y validación de patrones en cadenas de texto.