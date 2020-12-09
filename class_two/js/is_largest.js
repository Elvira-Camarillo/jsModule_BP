console.log('¿Qué número es mayor?')
const NUMBER_ONE = prompt('Dame un número por favor')
const NUMBER_TWO = prompt('Escribe un segundo número')
if (NUMBER_ONE > NUMBER_TWO) {
    console.log(`El ${NUMBER_ONE} es el mayor`)
} else if (NUMBER_ONE === NUMBER_TWO) {
    console.log(`El ${NUMBER_ONE} es igual a ${NUMBER_TWO}`)
} else {
    console.log(`El ${NUMBER_TWO} es el mayor`)
} 