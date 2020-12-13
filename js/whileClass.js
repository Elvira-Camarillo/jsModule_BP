 // Tabla del 7 con while
 console.log('Tabla del 7 con while')
let counter = 1
while (counter <= 10) {
  // Sentencia
  console.log(`7 x ${counter} = ${7 * counter }`)
  // muta la condición o variable
  counter = counter + 1
}

console.log('Tabla del 7 con Do-while')
let counterDo = 1
do {
    // Sentencia
    console.log(`7 x ${counterDo} = ${7 * counterDo }`)
    counterDo++
} while (counterDo <= 10);

console.log('Números pares entre 0 y 100 con While')
let counterNum = 1
while(counterNum <= 100){
    if( counterNum % 2 ===0 ){
        console.log(counterNum)
    }
    counterNum ++
}

// console.log('Ejercicio 2: Números pares entre 1 y 100')
// let numberEven = []
// let counterNumber2 = 2
// while(counterNumber <= 100){
//     if( counterNumber2 % 2 ===0 ){
//         numberEven.push(counterNumber2)
//     }
//     counterNumber2 = counterNumber2 + 1
// }
// console.log(numberEven)

// Ejercicio Reverse string
console.log('EJERCICIO')

let stringText = 'Hola Koders'
let revString = ''
let count = stringText.length-1
// while (count >= 0) {
//     revString = revString.concat(stringText[count])
//     count = count - 1
// }
// console.log(revString)
while (count >= 0) {
    revString += stringText[count]
    count --
}
console.log(revString)

