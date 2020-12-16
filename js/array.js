// Declarar un string
const nameString = 'assss'

// Array 
// const myArrayOne = [ 'string', 2, [1,2,3]]
// console.log(myArrayOne[1])
// // Accede a la posición la posición 2 del array que esta dentro de myArray
// console.log(myArrayOne[2][2]) 

const myArray = [ 'string', 2, 3, 9, [1,23]]

for(let i = 0; i < myArray.length; i ++ ){
    console.log(myArray[i])
}

const arrayTables = [1,4,7]
for (let count = 0; count < arrayTables.length; count ++){
    let number = arrayTables[count]
    for (let i = 1; i <= 10; i ++){
        console.log(`La tabla ${number} x ${i} = ${number * i}`)
    }
}

// Suma todos los elementos de un array

const arraySumNumber = [1,2,3,4]
let totalArraySum = 0
for(let n = 0; n < arraySumNumber.length; n++){
    totalArraySum += arraySumNumber[n]
}
console.log(totalArraySum)

// Método de Array
// sort () -> Ordena de acuerdo al orden de la tabla ASCI

// Push() -> Agrega valores a un array

// fil () -> sustituye o reemplaza por el valor indicado 

/**
 * Métodos:
 * forEach()
 * map()
 * filter()
 * reduce()
 */