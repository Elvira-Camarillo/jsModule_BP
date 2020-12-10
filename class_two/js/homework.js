// Exercise 1
// 1. pedir al usuario la calificación de un examen ( 0 a 100) 
// Imprimir en consola las equivalencias en letra su calificación, es decir
// -> si es mayor o igual a 90, imprimir "A"
// -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
// -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
// -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
// -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
// -> si es menor 50 , imprimir "F"
console.log('Ejercicio 1')

const QUALIFICACTION = parseInt(prompt('Ingresa la calificación del examen en una escala de 0 a 100'))

if(QUALIFICACTION < 50) {
    console.log('F')
} else if ( QUALIFICACTION >=50 && QUALIFICACTION <60) {
    console.log('E')
} else if ( QUALIFICACTION >=60 && QUALIFICACTION <70) {
    console.log('D')
} else if ( QUALIFICACTION >=70 && QUALIFICACTION <80) {
    console.log('C')
} else if ( QUALIFICACTION >=80 && QUALIFICACTION <90) {
    console.log('B')
} else if ( QUALIFICACTION >=90) {
    console.log('A')
}


// Exercise 2
// Pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo
console.log('Ejercicio 2')
const NUMBER = parseInt(prompt('Escribe un número entre 0 y 100'))

if (NUMBER %2 === 0 && NUMBER% 11 === 0) {
    console.log(`El ${NUMBER} es divisible entre 2 y 11`)
} else {
    console.log(`El ${NUMBER}  NO es divisible entre 2 y 11`)
}

// Exercise 3
// Pedir al usuario por prompt un numero entre 1 y 100
// Verificar si es un par o impar
// Imprimir en resultado en consola
console.log('Ejercicio 3')
// const NUMBER_EVEN = parseInt(prompt('Escribe otro un número entre 0 y 100'))
NUMBER % 2 === 0 ? console.log(`El número ${NUMBER} es par`):console.log(`El número ${NUMBER} es impar`)


// Exercise 4
// pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.
console.log('Ejercicio 4')
const NUMBER_DAY = parseInt(prompt('Escribe un número entre 1 y 7'))
switch (NUMBER_DAY) {
    case 1:
        console.log('Feliz lunes')
        break;
    case 2:
        console.log('Feliz martes')
        break
    case 3:
        console.log('Feliz miercoles')
        break
    case 4:
    console.log('Feliz jueves')
    break
    case 5:
        console.log('Feliz viernes')
        break
    case 6:
        console.log('Feliz sábado')
        break
    case 5:
        console.log('Feliz domingo')
        break
    default:
        console.log('La semana sólo tiene 7 días.')
        break;
}

// Exercise 5
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

console.log('Ejercicio 5')
const NUMBER_MONTH = parseInt(prompt('Koder, por favor indica un número entre 1 y 12'))
switch (NUMBER_MONTH) {
    case 1:
        console.log('Enero tiene 31 días')
        break;
    case 2:
        console.log('Febrero tiene 28 días')
        break;    
    case 3:
        console.log('Marzo tiene 31 días')
        break;    
    case 4:
        console.log('Abril tiene 30 días')
        break;    
    case 5:
        console.log('Mayo tiene 31 días')
        break;    
    case 6:
        console.log('Junio tiene 30 días')
        break;    
    case 7:
        console.log('Julio tiene 31 días')
        break;    
    case 8:
        console.log('Agosto tiene 31 días')
        break;
    case 9:
        console.log('Septiembre tiene 30 días')
        break;
    case 10:
        console.log('Octubre tiene 31 días')
        break
    case 11:
        console.log('Noviembre tiene 30 días')
        break
    case 12:
        console.log('Diciembre tiene 31 días.')
    default:
        console.log('Número invalido')
        break;
}

console.log('Ejercicio 5: Form 2')
switch (NUMBER_MONTH) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`El mes ${NUMBER_MONTH} tiene 31 días`)    
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`El mes ${NUMBER_MONTH} tiene 30 días`)
        break
    case 2:
        console.log(`El mes ${NUMBER_MONTH} tiene 28 o 29 días`)
        break
    default:
        console.log(`El ${NUMBER_MONTH} no es un mes del año `)
        break
}