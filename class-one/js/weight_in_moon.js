// Ejercicio Clase 1 ¿Cuál es tu peso en la luna?

let weight_koder_in_earth
weight_koder_in_earth = prompt('¿Cuál es tu peso en Kg?')

weight_koder_in_moon = (weight_koder_in_earth * 1.622)/9.8

alert(`Tú peso en la luna es: ${weight_koder_in_moon.toFixed(3)} Kg`)
