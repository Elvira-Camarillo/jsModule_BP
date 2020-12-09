console.log('Ejercicio 2: ¿cómo esta el clima hoy?')

let weather_today = prompt('¿cómo esta el día hoy?')
weather_today = weather_today.toLocaleLowerCase()

if( weather_today === 'soleado' ) {
    console.log(`¡Hey koder!, es un buen día para ir a playa`)
} else if ( weather_today === 'lluvioso' ) {
    console.log(`¡Hey koder!, si vas a salir de casa no olvides tu sombrilla`)
} else if (  weather_today === 'nevando' ) {
    console.log(`Hey koder, es hora de esquiar :)`)
} else if ( weather_today === 'nublado' ) {
    console.log(`¡Hey koder!, te sugiero disfrutar de un rico cafecito o un chocolatito `)
} else {
    let weather_description = prompt('Describeme tu día por favor')
    console.log(`El koder dice: ${weather_description}`)
}
