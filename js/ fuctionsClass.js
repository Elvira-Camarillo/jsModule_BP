// Clase de Funciones
/*
    function name(params, ...) {
        // Sentencias    
    }
 */
function myFuction () {
    console.log('Mi primera función')
    
}

function getName (params) {
    let name = prompt('¿Cuál es tu nombre?')
    console.log(`Hola ${name}`)
    
}

function nameReverse (stringName) {
    const stringToReverse = stringName
    let stringReversed = ''
    for(let i = stringToReverse.length - 1; i >= 0; i-- ){
        stringReversed += stringToReverse[i]
    }
    console.log(stringReversed)
}

