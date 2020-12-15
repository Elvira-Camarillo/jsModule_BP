// Estructura de las arrow fuctiona
const nameFuctions = (par1, par2) => {
    // sentencias
} 

function addFuction (a, b) {
    return a + b 
}


const addArrow = (a,b) => {
    return a + b
}

// Ejercicios convertir las funciones a arrow Fuctions


// Edad del  un perro en años canino 1 x 7 años
const ageDog = ageHumanDog => ageHumanDog * 7

// Área de circulo
// const calcAreaCircle = radio => {
//     const PI = 3.1416
//     return PI * radio * radio
// }

// Form 2
const calcAreaCircle = radio => Math.PI * radio * radio

// Circunferencia un circulo
const calcCircunference = radio => Math.PI * 2 * radio

// Convertir Tempeartura
const tempConverte = ( temparature, temparatureScale = 'C' ) => {
    if ( temparatureScale === 'C') {
        return (1.8 * temparature) + 32
    } else if ( temparatureScale === 'F' ) {
        return (temparature - 32) / 1.8
    } else {
        return 'Sólo se pueden calcular grados Celsius o Farenheit'
    }   
}

  // Calcule el factorial de un número.
  const getFactorialNumber = numberToFactorial => {
    let total = 1
    for( let i = 1; i <= numberToFactorial; i++ ){
        total *= i
    }
    return total
}

