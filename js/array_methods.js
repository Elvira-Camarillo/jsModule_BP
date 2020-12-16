
// Tabla de multiplicar de un array dado.
// Imprime en consola cada tabla
const arrayTable = [1, 10, 11, 9]

arrayTable.forEach(currentTable => {
    for( let i = 1; i <= 10; i++){
        console.log(`${currentTable} x ${i} = ${currentTable * i}`)
    }
})

// Ejercicio 1 
// Array [1,2,3] -> [2,4,6]

let arrayNumbers =  [1,2,3,4]

const numberDuplicate = (arrayNumbers) => {
    let arrayNumbersDuplicate = []
    arrayNumbers.forEach(acc => {
        arrayNumbersDuplicate.push(acc *2)
    })
    return arrayNumbersDuplicate
}

//Ejercicio 2
// Parametro [Array] -> [Números pares del Array.]
const numbersEvenArray = arrayNumb => {
    let arrayEvens = []
    arrayNumb.forEach(
        acc => {
            if( acc % 2 === 0 ){
                arrayEvens.push(acc)
            }
        })
    return arrayEvens
}

// Ejercicio 3
// ['hola', 'mundo']
// ['ha', 'mo']
 const letterString = arrayString => {
    let stringLetters = []
    arrayString.forEach(
        acc => {
            let string = acc.substring(0,1).concat(acc.substring(-1))
            stringLetters.push(string)
        }
    )
    return stringLetters

}