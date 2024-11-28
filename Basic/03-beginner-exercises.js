/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Comentario en una linea

// 2. Escribe un comentario en varias líneas

/* 
        Comentario
        en
        varias
        Lineas
    */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// Cadena de Texto(String)
let String = "Hola Mundo!";
//Numerico
let Int = 25;
//Booleanos
let Verdadero = true;
let Falso = false;
// valor indefinido
let undefinedValue;
// Null
let valorNull = null;
// Symbol
let miSimbolo = Symbol("Valor Unico");
//BigInt
let NumeroGrande =
  BigInt(123123342545346546735461345624376234534543453453453453);
let NumeroGrande2 = 123123342545346546735461345624376234534543453453453453n;
console.log("----------------------------------------------");

// 4. Imprime por consola el valor de todas las variables

console.log(String);
console.log(Int);
console.log(Verdadero);
console.log(Falso);
console.log(undefinedValue);
console.log(valorNull);
console.log(miSimbolo);
console.log(NumeroGrande);
console.log(NumeroGrande2);
console.log("----------------------------------------------");

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof String);
console.log(typeof Int);
console.log(typeof Verdadero);
console.log(typeof Falso);
console.log(typeof undefinedValue);
console.log(typeof valorNull);
console.log(typeof miSimbolo);
console.log(typeof NumeroGrande);
console.log(typeof NumeroGrande2);
console.log("----------------------------------------------");

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// Cadena de Texto(String)
String = "Hola Mundos!";
//Numerico
Int = 26;
//Booleanos
Verdadero = true;
Falso = false;
// valor indefinido
undefinedValue;
// Null
valorNull = null;
// Symbol
miSimbolo = Symbol("Valor Unico");
//BigInt
NumeroGrande = BigInt(123123342545346546735461345624376234534543453453453453);
NumeroGrande2 = 123123342545346546735461345624376234534543453453453453n;
console.log("----------------------------------------------");
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// Cadena de Texto(String)
String = 24;
//Numerico
Int = "hola";
//Booleanos
Verdadero = false;
Falso = true;
// valor indefinido
undefinedValue;
// Null
valorNull = null;
// Symbol
miSimbolo = Symbol(3);
//BigInt
//NumeroGrande = BigInt("hola");
//NumeroGrande2 = holan;
console.log("----------------------------------------------");

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const string = "hola";
const int = 254;
const boleeantrue = true;
const boleeanFALSE = false;
//const undefinedValue;
const valorNulo = null;
const simbolo = Symbol("paso");
const bigintalto =
  BigInt(12389127318973918237918272918719719827398127981289432718235689324623);
const bigintalto2 =
  12893190238129084029318403275590347590821739480723904371242n;
console.log("----------------------------------------------");
// 9. A continuación, modifica los valores de las constantes

//string = "holae";
//int = 2534;
//boleeantrue = false;
//boleeanFALSE = true;
//undefinedValue;
//valorNulo = "valorr vacio";
//simbolo = Symbol("pase");
/*bigintalto =
  BigInt(123389127318973918237918272918719719827398127981289432718235689324623);*/
//bigintalto2 = 1289319024538129084029318403275590347590821739480723904371242n;

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
