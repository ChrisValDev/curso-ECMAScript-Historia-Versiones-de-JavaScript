
// .flat() es un método en JavaScript que se utiliza para "aplanar" un array multidimensional, es decir, convertir un array que contiene arrays anidados en un único array unidimensional. Este método crea un nuevo array con todos los elementos de los arrays anidados concatenados en un único nivel.

const array = [1,1,4,3,5,7,[1,3,5,9,7, [6,2,9,5,1]]];
console.log(array.flat(3));


// .flatmap() es un método en JavaScript que se utiliza para mapear cada elemento de un array a un nuevo valor y aplanar el resultado en un nuevo array. Es una combinación de los métodos map() y flat(). Puedes utilizar flatMap() para aplicar una función de mapeo a cada elemento del array y luego aplanar los resultados en un único array.

const array2 = [1,2,3,4,5,];
console.log(array2.flatMap(v => [v, v * 2]));