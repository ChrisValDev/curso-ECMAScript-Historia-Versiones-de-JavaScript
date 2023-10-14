// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring

let user = { userName: 'Oscar', age: 34, };
let { userName, age } = user;
console.log(userName, user.age);

// spread operator ...
// Los tres puntos ... antes de person se utilizan para realizar una operación llamada "spread" o "propagación". En este contexto, lo que hace es copiar todas las propiedades del objeto person en el nuevo objeto data, junto con la propiedad country.

let person = { name: 'oscar', age: 28 };
let country = 'MX';

let data = { ...person, country };
console.log(data);