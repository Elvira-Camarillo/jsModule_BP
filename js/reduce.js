// Método Reduce 
// Forma 1
const arrReduce = [1,2,3,4]
arrReduce.reduce(( accumulador, currentValue,) => {
    let suma = accumulador + currentValue
    return suma
},0)

// Forma 2: Arrow fuction en una sola línea
const reduceFun = arrReduce.reduce( (accumulador, currentValue) => accumulador + currentValue , 0)


// Ejercicio Reduce
// Array de letras ['a','b','c','c','d']
// searchOcurrence(['a','b','c','c','d'],'c')
// Result: 2

let arrString = ['a','b','c','c','d']

const searchOcurrence = (arrString, elToSearch) => {
    let ocurrence = arrString.reduce( (acc, currentValue) => {
        if ( currentValue === elToSearch){
            return acc + 1
        } else {
            return acc + 0
        }
    },0)
    return ocurrence
}

const searchOcur = (arrString, elToSearch) => {
    let ocurr = arrString.reduce((acc, currentValue) => {
        return currentValue === elToSearch ? acc +1 : acc + 0
    },0)
    return ocurr 
}


// Ejercicio 2: Convertir un array en un string
// ['en', 'algun', 'lugar', 'de', 'la', 'mancha']
// -> 'En algun lugar de la mancha'
// .reduce()

let arryPhrase = ['En', 'algun', 'lugar', 'de', 'la', 'mancha']
const phrase = arryPhrase.reduce( (acc, currentValue) => {
        let sentence = acc += currentValue + ' '
        return (sentence)
    } ,'')


// Ejercicio 3: 