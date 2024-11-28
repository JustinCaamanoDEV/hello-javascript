/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let num1 = 2;
let num2 = 2;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

num1++;
console.log(num1);
num2--;
console.log(num2);
console.log("----------------------------------------------");
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let asignacion = 3;
console.log(asignacion);
asignacion += 1;
console.log(asignacion);
asignacion -= 1;
console.log(asignacion);
asignacion *= 1;
console.log(asignacion);
asignacion /= 1;
console.log(asignacion);
asignacion %= 1;
console.log(asignacion);
asignacion **= 1;
console.log(asignacion);
console.log("----------------------------------------------");
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

let num3 = 1;
console.log(num1 > num3); // true
console.log(num3 < num1); // true
console.log(num3 <= num2); // true
console.log(num2 >= num3); // true
console.log(num3 == num2); // true
console.log("----------------------------------------------");

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(num1 < num3); // false
console.log(num3 > num1); // false
console.log(num3 >= num1); // false
console.log(num1 <= num3); // false
console.log(num1 == num2); // false
console.log("----------------------------------------------");

// 5. Utiliza el operador lógico and

console.log(num2 >= num3 && num1 > num3);
console.log("----------------------------------------------");
// 6. Utiliza el operador lógico or

console.log(num2 >= num3 || num1 > num3);
console.log("----------------------------------------------");
// 7. Combina ambos operadores lógicos

console.log((13 > 11 && 2 < 1) || 4 > 3);
console.log("----------------------------------------------");
// 8. Añade alguna negación

console.log(!(4 > 1));
console.log("----------------------------------------------");
// 9. Utiliza el operador ternario

let aprendizaje = true;

console.log(aprendizaje ? "Aprendi" : "No aprendi nada");
console.log("----------------------------------------------");

// 10. Combina operadores aritméticos, de comparáción y lógicas

let a = 1;
let b = 1;

console.log(a + b);

console.log(a + b > 0);
console.log(a + b > 0 && a + b < 10);
