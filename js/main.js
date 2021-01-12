// const request = new XMLHttpRequest()
// console.log(request)

// /** Ready State of HTTP Requets
// 0: no inicializado. Indica que no se ha abierto la conexión con el servidor 
// 1: Conexión con servidor establecida. 
// 2: Recibida petición en servidor. 
// 3: Enviando información. 
// 4: Completado. Se ha recibido la información del servidor y está lista para operar con ella.
//  */

// request.addEventListener('readystatechange', () => {
//     if(request.readyState !== 4) {
//         return
//     } else {
//         if( request.status >= 200 && request.status < 300) {
//             const response = request
//             console.log(response)
//             const dataUSer = JSON.parse(response.responseText)
//             let listUsers = ''
//             dataUSer.forEach(user => {
//                 listUsers += `<li>${user.name}, ${user.phone}, <a href="${user.website}"> Ir al sitio Web</a></li>`
//                 console.log(listUsers)
//             });
//             document.querySelector('.list_users').innerHTML = listUsers
//         } else {
//             console.log('No se puso ejecutar')
//         }
//     }
// })

// request.open('GET','https://jsonplaceholder.typicode.com/users')
// request.send()