/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola "https://croquetero.com/blogs/croqueblog/como-calcular-la-edad-de-los-perros-en-anos-humanos"
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */

// Calcula la edad de un perro a partir de su edad Humana
function calculateDogAge (nameDog, ageHumanDog) {
  if ( ageHumanDog === 1) {
    console.log(`${nameDog} tiene 15 años caninos`)
  } else if ( ageHumanDog === 2) {
    console.log(`${nameDog} tiene 24 años canino`)
  } else if ( ageHumanDog >= 3 && ageHumanDog <= 5 ) {
    console.log(`${nameDog} tiene ${14 + (ageHumanDog * 5)} años caninos`)
  } else if ( ageHumanDog >5 ) {
    console.log(`${nameDog} tiene ${19 + (ageHumanDog * 4)} años caninos`)
  }
}


/**
 * Crear una función que calcule el área y la circunferencia de un círculo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> la área del circulo es NN y la circunferencia es de NN
 */

 // Calcule el área y circunferencia de un círculo
function calcGeometry(radio) {
  let Pi = 3.1416
  circumferenceCircle = 2 * Pi * radio
  areaCircle = Pi * radio * radio
  console.log(`El círculo con radio ${radio} tiene una circunferencia de ${circumferenceCircle} y una área de ${areaCircle}`)
}


/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */

// Convertidor de Temperatura
function temperatureConverte (temparature, temparatureScale = 'C') {
  if ( temparatureScale === 'C') {
    console.log(`${temparature} grados Celsius son equivalentes a ${(1.8 * temparature) + 32} grados Farenheit`)
  } else if( temparatureScale === 'F' ) {
    console.log(`${temparature} grados Farenheit son equivalentes a ${(temparature - 32) / 1.8} grados Celsius`)
  }
}


/*
 * Escribir una función que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */

// Calcule el factorial de un número.
function getFactorial (numberToFactorial) {
  let total = 1
  for( let i = 1; i <= numberToFactorial; i++ ){
    total = total * i
  }
  console.log(`El factorial de ${numberToFactorial} es ${total}`)
}