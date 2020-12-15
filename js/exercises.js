// Calcula la edad de un perro a partir de su edad Humana
function calculateDogAge (nameDog, ageHumanDog) {
    if ( ageHumanDog === 1) {
      console.log(`${nameDog} tiene 15 años caninos`)
    } else if ( ageHumanDog === 2) {
      console.log(`${nameDog} tiene 24 años canino`)
    } else if ( ageHumanDog >= 3 && ageHumanDog <= 5 ) {
      console.log(`${nameDog} tiene ${14 + (ageHumanDog * 5)} años caninos`)
    } else {
      console.log(`${nameDog} tiene ${19 + (ageHumanDog * 4)} años caninos`)
    }
  }
  

   // Calcule el área y circunferencia de un círculo
  function calcGeometry(radio) {
    const PI = 3.1416
    circumferenceCircle = 2 * PI * radio
    areaCircle = PI * radio * radio
    console.log(`El círculo con radio ${radio} tiene una circunferencia de ${circumferenceCircle} y una área de ${areaCircle}`)
  }
  
  // Convertidor de Temperatura
  function temperatureConverte (temparature, temparatureScale = 'C') {
    if ( temparatureScale === 'C') {
      console.log(`${temparature} grados Celsius son equivalentes a ${(1.8 * temparature) + 32} grados Farenheit`)
    } else if ( temparatureScale === 'F' ) {
      console.log(`${temparature} grados Farenheit son equivalentes a ${(temparature - 32) / 1.8} grados Celsius`)
    } else {
      console.log(`Sólo se pueden calcular grados Celsius o Farenheit`)
    }
  }
  
  // Calcule el factorial de un número.
  function getFactorial (numberToFactorial) {
    let total = 1
    for( let i = 1; i <= numberToFactorial; i++ ){
      total = total * i
    }
    console.log(`El factorial de ${numberToFactorial} es ${total}`)
  }

// Ejercicios convertir las funciones anteriores a funciones de retorno

function add (a, b) {
    let c = a + b
    return c
}
 const result = add (2, 5)

// Edad del  un perro en años canino 1 x 7 años
function ageDog (ageHumanDog) {
    yearsDog = ageHumanDog * 7
    return yearsDog
}
const resultAgeDog = ageDog(5)

// Área de circulo
function calcAreaCircle (radio) {
    const PI = 3.1416
    areaCircle = PI * radio * radio
    return areaCircle
}

// Circunferencia un circulo
function calcCircunference (radio) {
    const PI = 3.1416
    circumferenceCircle = 2 * PI * radio
    return circumferenceCircle
}

// Convertir Tempeartura
function tempConverte (temparature, temparatureScale = 'C') {
    if ( temparatureScale === 'C') {
        let temparatureCelsius = (1.8 * temparature) + 32
        return temparatureCelsius
    } else if ( temparatureScale === 'F' ) {
        let temparatureFarenheit =  (temparature - 32) / 1.8
        return temparatureFarenheit
    } else {
        let messageError = 'Sólo se pueden calcular grados Celsius o Farenheit'
        return messageError
    }
}

  // Calcule el factorial de un número.
  function getFactorialNumber (numberToFactorial) {
    let total = 1
    for( let i = 1; i <= numberToFactorial; i++ ){
      total = total * i
    }
    return total
  }

