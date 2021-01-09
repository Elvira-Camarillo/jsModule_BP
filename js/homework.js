// HomeWork
// Ejercicio 1
// Si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html

const isCookie = () => {
    if(document.cookie.includes('sessionuser=true')){
        window.open("/user.html","user")
    } else {
        window.open("/login.html","login")
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

window.addEventListener('load',showHideDiv)
window.addEventListener('resize',showHideDiv)

// utilizar css
// no usar inline styles


// Solucón Mentor
// const checkSession = () => {
//     const cookieUSer = document.cookie
//     if(cookieUSer.cookie.includes('sessionusers=1234')){
//         if (window.location.pathname !== '/user.html'){
//             location.pathname='/user.html'
//         }
//     } else {
//         document.cookie = 'sessionusers=1234'
//         location.pathname='./login.html'
//     }
// }

// window.addEventListener('load', function(){
//     console.log('Pagina cargada')
//     checkSession()
    
// })
