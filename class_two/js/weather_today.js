console.log('Ejercicio 2: ¿cómo esta el clima hoy?')

let weather_today = prompt('¿cómo esta el día hoy?')
weather_today = weather_today.toLocaleLowerCase()

if( weather_today == 'soleado' ) {
    console.log(`El día esta soleado por acá`)
} else if ( weather_today == 'lluvioso' ) {
    console.log(`El día esta lluvioso por acá`)
} else if (  weather_today == 'nevando' ) {
    console.log(`Hoy esta nevando por acá`)
} else if ( weather_today == 'nublado' ) {
    console.log(`El día esta nublado por acá`)
} else {
    let weather_description = prompt('Me podrías indicar el clima por favor')
    console.log(`El clima esta: ${weather_description} hoy`)
}
