// HomeWork
// Ejercicio 1
// Si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html

const isCookie = () => {
    if(document.cookie.includes('sessionuser=true')){
        window.open("/login.html","login")
    } else {
        window.open("/user.html","user")
    }
}
window.addEventListener('load', isCookie)


// Ejercicio 2 
// Crear un div con un mensaje de
// "Este sitio se ve mejor en desktop"
// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje
const showHideDiv = () =>  {
    if (window.innerWidth <= 767){
        document.querySelector('.message').classList.remove('d-block')
        document.querySelector('.message').classList.add('d-none')
    } else{
        document.querySelector('.message').classList.remove('d-none')
        document.querySelector('.message').classList.add('d-block')
    }
}

window.addEventListener('resize',showHideDiv)
window.addEventListener('load',showHideDiv)

// utilizar css
// no usar inline styles