const aBigNumber = 4857238945745n;
const anotherBigNumber = BigInt(4857238945745);
console.log(aBigNumber);
console.log(anotherBigNumber);


// BigInt es un tipo de datos introducido en ECMAScript 2020 (ES11) que permite representar enteros arbitrariamente grandes en JavaScript. Antes de la introducción de BigInt, JavaScript utilizaba el tipo Number para representar enteros, pero estaba limitado por el estándar IEEE 754 a valores seguros hasta ±9,007,199,254,740,991 (2^53-1). Con BigInt, puedes representar enteros más grandes sin preocuparte por perder precisión.
// Para crear un valor BigInt, simplemente añades la letra "n" al final de un número o utilizas la función BigInt():