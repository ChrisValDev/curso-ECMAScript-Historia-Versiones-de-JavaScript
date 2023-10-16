console.log(window); // navegador
console.log(global); // node
console.log(selft); // webworker
console.log(globalThis);

// globalThis es una variable global en JavaScript que proporciona una forma estandarizada de acceder al objeto global en cualquier entorno de ejecución, ya sea en navegadores web o en entornos de servidor como Node.js.

// La necesidad de una variable como globalThis surge debido a las diferencias en la forma en que el objeto global se referencia en diferentes contextos. En navegadores web, el objeto global se puede acceder a través de window, self, o this, mientras que en Node.js se utiliza global. La introducción de globalThis proporciona una forma consistente de acceder al objeto global sin importar el entorno de ejecución.

// Por lo tanto, puedes usar globalThis para acceder a propiedades y métodos globales en cualquier entorno, sin preocuparte por las diferencias entre navegadores y Node.js.