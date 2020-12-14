// Función 1: Equivalencia de calificación de 0 a 100 en letras.
function gradeLetters(averageKoder) {
  if ( averageKoder >= 90 && averageKoder <= 100) {
    console.log(`El koder con ${averageKoder} debe tener una A`)
  } else if (averageKoder >= 80 && averageKoder < 90) {
    console.log(`El koder con ${averageKoder} debe tener una B`)
  } else if (averageKoder >= 70 && averageKoder < 80) {
    console.log(`El koder con ${averageKoder} debe tener una C`)
  } else if (averageKoder >= 60 && averageKoder < 70) {
    console.log(`El koder con ${averageKoder} debe tener una D`)
  } else if (averageKoder >= 50 && averageKoder < 60) {
    console.log(`El koder con ${averageKoder} debe tener una E`)
  } else if (averageKoder < 50) {
    console.log(`El koder con ${averageKoder} debe tener una F`)
  } 
}


// Función 2: Números divisibles entre 2 y 100
function numbersDivisible (numberIni, numberFin) {
    let numberDiv = []
    for ( let i = numberIni +1 ; i <= numberFin; i++){
      if( i % 2 === 0 && i % 11 === 0){
        numberDiv.push(i)
      }
    }
    console.log(`Los número de ${numberIni} a ${numberFin} divisibles entre 2 y 11 son: ${numberDiv}`)
}


// Función 3: Dame los números pares entre dos números indicados.
function numberEven (numberInitial, numberFinal) {
  let numberEvens = []
  for ( let i = numberInitial ; i <= numberFinal; i++){
    if( i % 2 === 0){
      numberEvens.push(i)
    }
  }
  console.log(`Los números pares entre ${numberInitial} y ${numberFinal} son ${numberEvens}`)
}


// Función 4: De acuerdo al número de día la semana escribir el nombre del día
function nameDay (numberDay) {
  switch (numberDay) {
    case 1:
        console.log('¡Feliz lunes Koder!')
        break;
    case 2:
        console.log('¡Feliz martes Koder!')
        break
    case 3:
        console.log('¡Feliz miercoles Koder!')
        break
    case 4:
    console.log('¡Feliz jueves Koder!')
    break
    case 5:
        console.log('¡Feliz viernes Koder!')
        break
    case 6:
        console.log('¡Feliz sábado Koder!')
        break
    case 5:
        console.log('¡Feliz domingo Koder!')
        break
    default:
        console.log('¡Hey Koder, La semana sólo tiene 7 días!')
        break;
}
  
}


// Fución 5: De acuerdo al número escribir el nombre y número de días que tiene el mes
function nameMonth(numberMonth) {
  switch (numberMonth) {
  case 1:
    console.log('Enero tiene 31 días')
    break;
  case 2:
    console.log('Febrero tiene 28 días')
    break;    
  case 3:
    console.log('Marzo tiene 31 días')
    break;    
  case 4:
    console.log('Abril tiene 30 días')
    break;    
  case 5:
    console.log('Mayo tiene 31 días')
    break;    
  case 6:
    console.log('Junio tiene 30 días')
    break;    
  case 7:
    console.log('Julio tiene 31 días')
    break;    
  case 8:
    console.log('Agosto tiene 31 días')
    break;
  case 9:
    console.log('Septiembre tiene 30 días')
    break;
  case 10:
    console.log('Octubre tiene 31 días')
    break
  case 11:
    console.log('Noviembre tiene 30 días')
    break
  case 12:
    console.log('Diciembre tiene 31 días.')
  default:
    console.log('Número invalido')
    break;
}
}


// Fución 6: Escribe la tabla del número indicado.
function tableMultiplication (number) {
  for( let i = 1; i<= 10; i++ ) {
    console.log(`${number} x ${i} = ${ number * i}`)
  }
}


// Función 7: Números divisibles entre 2 ó 7 del 0 al 100
function numbersDivTwoAndSeven (numberIni, numberFin) {
  let numberDiv = []
  for ( let i = numberIni ; i <= numberFin; i++){
    if( i % 3 === 0 || i % 7 === 0){
      numberDiv.push(i)
    }
  }
  console.log(`Los número de ${numberIni} a ${numberFin} divisibles entre 3 o 7 son: ${numberDiv}`)
}


// Función 8: Escribe la tabla de un numero al reves
function tableReverse (numToMultiply) {
    for( let i = 1; i< 11; i++ ) {
      console.log(`${numToMultiply} x ${(11 - i)} = ${numToMultiply * (11 - i)}`)
    }
}


// Función 9: Cantidad de espacios que se encuentan en una cadena de texto
function blanksString (sentence) {
  let numberSpace = 0
  for( let i=0; i < sentence.length; i++ ){
    if( sentence[i] === ' ' ){
      numberSpace += 1
    }
  }
  console.log(`La oración ${sentence} tiene ${numberSpace} espacios en blanco`)
}


// Función 10: ¿Cuántas vocales hay en esta oración?
function vowelsString (sentence) {
  let numberVowels = 0
  for( let i = 0; i<sentence.length; i++ ) {
    if( 
      sentence[i] === 'a' ||
      sentence[i] === 'e' ||
      sentence[i] === 'i' ||
      sentence[i] === 'o' ||
      sentence[i] === 'u' ||
      sentence[i] === 'A' ||
      sentence[i] === 'E' ||
      sentence[i] === 'I' ||
      sentence[i] === 'O' ||
      sentence[i] === 'U'
    ){
      numberVowels += 1
    }
  }
  console.log(`La oración ${sentence} tiene: ${numberVowels} vocales`)
} 

