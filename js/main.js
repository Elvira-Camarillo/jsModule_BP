// Imprimir la tabla del 8 en reversa

console.log('Ejercicio 1 tabla del 8 en reversa')
for( let i = 1; i< 11; i++ ) {
  console.log(`8 x ${(11 - i)} = ${8 * (11 - i)}`)
}

//Ejercicio 1, Forma 2
console.log('Ejercicio 1, Solución 2')
for ( let i = 10; i>= 1; i-- ) {
  console.log(`8 x ${i} = ${8 * i}`)
}

// Imprimir los número pares entre 1 y 100
console.log('Ejercicio 2: Números pares entre 1 y 100')
let numberEven = []
let i
for ( i = 2; i <= 100; i++){
  if( i % 2 === 0){
    numberEven.push(i)
  }
}
console.log(numberEven)


// Ejercicio 3: Dado un string
// Imprimir string en reversa

/* let stringText = 'Hola Koder'
let newString = ''
 for( let i = stringText.length -1; i >= 0; i-- ){
    newString += newString[i]
  }
  console.log(newString)
*/

console.log('String Reverse')
let stringText = 'Hola Koders'
let revString = ''
for( let i = stringText.length -1; i >= 0; i-- ){
  revString = revString.concat(stringText[i])
}
console.log(revString)

// While ->
/*
while (condition) {
       //sentencia
  
       //muta la conndición
}
 */

