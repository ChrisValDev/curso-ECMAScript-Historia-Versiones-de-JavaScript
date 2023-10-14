// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// object destructuring

let user = { userName: 'Oscar', age: 34, };
let { userName, age } = user;
console.log(userName, user.age);

// spread operator ...
// Los tres puntos ... antes de person se utilizan para realizar una operación llamada "spread" o "propagación". En este contexto, lo que hace es copiar todas las propiedades del objeto person en el nuevo objeto data.

let person = { name: 'oscar', age: 28 };
let country = 'MX';

let data = { ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);


// Ejercicio Combina objetos JSON con el spread operator
function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  }, json2 = {
    age: 12,
    color: "Blanco"
  }) {
    let solution = {...json1, ...json2};
    return solution;
  }
  
  console.log(solution({
    name: "Bigotes",
    food: "Pollito"
}));
