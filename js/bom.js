// BOM -> Browwer Object Model

// Ejercicio: Resize
// Resolución <= 767 --> Aparecer contenido mobile y desaparecer desktop
// Resolucion > 767 --> Desaparecer mobile y aparecer desktop
// Evento resize & window.innerWidth

const showHideBox = () =>  {
    console.log('me ejecuto')
    // console.log(window.innerWidth )
    if (window.innerWidth <= 767){
        document.querySelector('.box_mobile').classList.remove('d-none')
        document.querySelector('.box_mobile').classList.add('d-block')
        document.querySelector('.box_desktop').classList.remove('d-block')
        document.querySelector('.box_desktop').classList.add('d-none')
    } else{
        document.querySelector('.box_mobile').classList.remove('d-block')
        document.querySelector('.box_mobile').classList.add('d-none')
        document.querySelector('.box_desktop').classList.remove('d-none')
        document.querySelector('.box_desktop').classList.add('d-block')
    }
}

window.addEventListener('resize',showHideBox)
window.addEventListener('load',showHideBox)

// Si existe cokie loggeed
// logged = true
// Si existe la cookie = logged
// mensaje: bienvenido
// sino existe
// mensaje; user is offline
// loguearlo


const isLogged = () => {
    if(document.cookie.includes('logged=true')){
        document.querySelector('#session').innerHTML = 'Bienvenido'
    } else {
        document.querySelector('#session').innerHTML = 'User is offline'
        document.cookie = 'logged=true'
    }
}
window.addEventListener('load', isLogged)
