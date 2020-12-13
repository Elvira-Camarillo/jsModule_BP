console.log('TAREA CLASE 3') 
// Ejercicio 1
// Imprimir en consola la tabla del 7
// 7 x 1 = 7
 console.log('Ejercicio 1: tabla del 7')
let tabla = []
for(let i = 1; i<= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`)
}
console.log(tabla)

// Ejercicio 2
// Imprimir en consola los múltiplos de 3 y 7 que se encuentran entre el 1 y el 100
// 3,6,7,9,12,14,15....
console.log('Ejercicio 2: Múltiplos de 3 y 7')
for(let i = 1; i<= 100; i++) {
    if( i % 3 === 0 || i % 7 === 0 ){
        console.log(i)
    }
}

// Ejercicio 3
// Imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
// “en un lugar de la mancha” -> 5
console.log('Ejercicio 3: Espacios en una cadena de texto ')
let text = 'En un lugar de la mancha'
let nSpace = 0
for( let i=0; i < text.length; i++ ){
    if( text[i] === ' ' ){
        nSpace += 1
    }
}
console.log(`El string ${text} tiene: ${nSpace} espacios en blanco`)

// Ejercicio 4 
// Imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
// “Hola mundo” -> 4
console.log('Ejercicio 4: Vocales en un string')
let textVowels = 'Hola Koders!'
let numberVowels = 0
for( let i = 0; i<textVowels.length; i++ ) {
    // textVowels = textVowels.toLocaleLowerCase()
    if( 
        textVowels[i] === 'a' ||
        textVowels[i] === 'e' ||
        textVowels[i] === 'i' ||
        textVowels[i] === 'o' ||
        textVowels[i] === 'u' ||
        textVowels[i] === 'A' ||
        textVowels[i] === 'E' ||
        textVowels[i] === 'I' ||
        textVowels[i] === 'O' ||
        textVowels[i] === 'U'
    ){
        numberVowels += 1
    }
}
console.log(`La oración ${textVowels} tiene: ${numberVowels} vocales`)