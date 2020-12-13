// Escribe la tabla de 8 al reves
function table8Reverse () {
    for( let i = 1; i< 11; i++ ) {
      console.log(`8 x ${(11 - i)} = ${8 * (11 - i)}`)
    }
}

// Escribe la tabla del número indicado.
function tableMultiplication (number) {
    for( let i = 1; i<= 10; i++ ) {
        console.log(`${number} x ${i} = ${ number * i}`)
      }
    
}

// Dame los números pares entre dos números indicados.
function numberEven (numberInitial, numberFinal) {
    let numberEvens = []
    for ( let i = numberInitial ; i <= numberFinal; i++){
      if( i % 2 === 0){
        numberEvens.push(i)
      }
    }
    console.log(`Los números pares entre ${numberInitial} y ${numberFinal} son ${numberEvens}`)
}
