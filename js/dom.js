// console.log('Hola Koders')

// let elemento = document.getElementById('caja')
// let elementos = document.getElementsByClassName('parrafo')
// let secondElement = elementos[1]

// // Primera coincidendia
// let querySelector =   document.querySelector('.secciones')
// //  Todas las coincidencias.
// let  querySelectorAll = document.querySelectorAll('.secciones')

// let box =  document.getElementsById('caja2')

const addElements = (selector,numberElement, arrNames ) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index + 1 <= numberElement) {
            listKoders += `<li>koder ${index + 1}: ${koder}</li>`
        }
    });
    document.querySelector(''+selector).innerHTML = listKoders
}
let kodersArr = ['Ale','Ruben','Oscar','Elvira']



const filterKoder = letter => {
    let filtrados= kodersArr.filter( (koder) => {
        return  koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#lista',filtrados.length,filtrados)
}

// onchange()
// Construir una funcion con filter 
// ocupar un método
// innerHTML
// lo tieene que separar el selector

// document.getElemntByID('orden').value
