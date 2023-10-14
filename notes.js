// Promesas

// Las promesas en JavaScript son un mecanismo para gestionar tareas asincrónicas. Permiten manejar operaciones que pueden tomar tiempo en completarse, como cargar datos desde una API, leer un archivo, realizar una solicitud de red, entre otras, de una manera más estructurada y legible.

// Las promesas son objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Tienen tres estados posibles:

// Pendiente (Pending): Cuando se crea una promesa, inicialmente está en estado pendiente, lo que significa que la operación asincrónica aún no se ha completado.

// Resuelta (Fulfilled): Una promesa pasa a este estado cuando la operación asincrónica se completa con éxito. En este punto, la promesa contiene un valor resultante.

// Rechazada (Rejected): Si la operación asincrónica falla, la promesa pasa a este estado, y contiene una razón del fallo.

// Las promesas proporcionan métodos como then y catch que permiten registrar funciones de devolución de llamada para manejar los resultados de la promesa cuando se resuelven o rechazan. Esto facilita la escritura de código más limpio y legible para manejar operaciones asincrónicas. Aquí hay un ejemplo de cómo se usa una promesa:

const miPromesa = new Promise((resolve, reject) => {
    // Simulación de una operación asincrónica (por ejemplo, una solicitud de red)
    setTimeout(() => {
      const exito = true; // Cambia a false para simular un fallo
      if (exito) {
        resolve("La operación se completó con éxito.");
      } else {
        reject("La operación falló debido a un error.");
      }
    }, 2000);
  });
  
  miPromesa
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.error(error);
    });
  
    // En este ejemplo, miPromesa representa una operación asincrónica que se completa después de un período de tiempo. La función then maneja el caso de éxito, mientras que la función catch maneja el caso de fallo. Esto hace que el código sea más claro y fácil de entender en comparación con el uso de callbacks anidadas