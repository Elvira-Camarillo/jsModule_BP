// EJERCICIOS HECHOS EN EQUIPO, OSCAR, NAYE & GABY
/** 
 * ejercicio 1
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/
console.log('Ejercicio 1');
const STR1 = 'Hola Koders'
console.log(`El String ${STR1} tiene ${STR1.length} caracteres`); 
​
/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */
console.log('Ejercicio 2');
const STR2 = ' qué hacen?'
let str_result = STR1.concat(STR2)
console.log(`La concatenación resultante es: ${str_result}`);
​
 /**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */
console.log('Ejercicio 3');
const STR3 = 'Aqui kodeando con el team';
let str3_result = STR3.slice(4,7)
console.log(`Impresión de caracteres 4 al 6 Forma 1: "${str3_result}"`);
str3_result = STR3.substr(4,3)
console.log(`Impresión de caracteres 4 al 6 Forma 2: "${str3_result}"`);
​
/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */
console.log('Ejercicio 4');
const STR4 = 'Hola mundo'
let str4_result = STR4.replace(" ","-")
console.log(`El string resultante es: ${str4_result}`);
​
 /**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */
console.log('Ejercicio 5');
const STR5 = 'hola chicuelos'
let str5_1 = STR5[0].toUpperCase()
let str5_2 = STR5[5].toUpperCase()
let str5_3 = STR5.substr(1,4)
let str5_4 = STR5.substr(6)
let str5_5 = str5_1.concat(str5_3,str5_2,str5_4)
console.log(`Las palabras Capitalizadas son: ${str5_5}`);
​
let str5_bis = STR5.split(' ')
let str5_char1 = str5_bis[0].split('')[0].toUpperCase()
let str5_char2 = str5_bis[1].split('')[0].toUpperCase();
console.log(`El string Capitalizado es: ${str5_char1.concat(str5_3,str5_char2,str5_4)} ` );
​
/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */
console.log('Ejercicio 6');
const STR6 = 'oscar@kodemia.mx'
let n = STR6.indexOf('@')
// console.log('El @ esta en '+n);
let email_masked = STR6.replace('oscar','*****')
console.log(email_masked);
​
/**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */
console.log('Ejercicio 8 (no hay 7)');
const STR8 = 'Elvira Nayeli'
let str8_result = STR8.split(' ')
console.log(str8_result);


// EJERCICICIOS VISTOS EN CLASE
/**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */

 const stringToSplit = "hola koders"
 const stringSplited = stringToSplit.split(' ')
 const stringCapitalized = []
 for (i = 0; i < stringSplited.length; i++){
    stringCapitalized.push(
        stringSplited[i].charAt(0).toUpperCase() + stringSplited[i].slice(1)
    )
 }
 console.log(stringCapitalized.join(' '))
/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */
let email = 'jorgec@kodemia.mx'
let possition = email.indexOf('@')
let email_corto = email.slice(possition)

console.log('****'+email_corto)
/**
 * Ejercicio 8
 * Declarar un string de al menos 2 palabras
 * convertir ese string en un array
 * "Hola koders"
 *  ["hola", "koders"]
 */

 for(let i = 0; i <= 10; i++){
     console.log(i)
 }