const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

    // Promise.allSettled es un método introducido en ECMAScript 2020 (ES11) que se utiliza para trabajar con múltiples promesas y obtener información sobre el estado de todas ellas, independientemente de si se resolvieron o rechazaron. A diferencia de Promise.all, que se resuelve solo si todas las promesas se resuelven con éxito, Promise.allSettled se resuelve incluso si algunas de las promesas se rechazan.