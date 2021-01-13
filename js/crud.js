// // Create user
// const createUser  = () => {
//     // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             console.log(JSON.parse(this.response))
//         } else if (this.readyState === 4 && this.status === 404) {
//             console.error(JSON.parse(this.response))
//             return false
//         }
//     }
//     xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
//     xhttp.send(
//         JSON.stringify({
//             id: 1,
//             name: "Jorge",
//             lastname: "Camarillo",
//             urlPhoto: "https://loremflickr.com/320/240/person"
//         })
//     )
// }
// // Read user
// const readUser  = () => {
//     // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             console.log(JSON.parse(this.response))
//         } else if (this.readyState === 4 && this.status === 404) {
//             console.error(JSON.parse(this.response))
//             return false
//         }
//     }
//     xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
//     // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
//     xhttp.send()
// }
// // Update and replace
// const updateAndReplaceUser  = (idUser) => {
//     // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         console.log(JSON.parse(this.response))
//       } else if (this.readyState === 4 && this.status === 404) {
//         console.error(JSON.parse(this.response))
//         return false
//       }
//     }
//     xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
//     xhttp.send(
//       JSON.stringify({
//         id: 1,
//         name: "Jorge",
//         lastname: "Camarillo",
//         urlPhoto: "https://loremflickr.com/320/240/person"
//       })
//     )
// }
// // Update and modify 
// const updateAndModifyUser  = (idUser) => {
//     // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//     let xhttp = new XMLHttpRequest()
//     xhttp.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         console.log(JSON.parse(this.response))
//       } else if (this.readyState === 4 && this.status === 404) {
//         console.error(JSON.parse(this.response))
//         return false
//       }
//     }
//     xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
//     xhttp.send(
//       JSON.stringify({
//         name: "Jorge Luis"
//       })
//     )
// }
// // Delete 
// const deleteUser  = (idUser) => {
//     // https://koders1gpython-default-rtdb.firebaseio.com/jorge
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//         console.log(JSON.parse(this.response))
//         } else if (this.readyState === 4 && this.status === 404) {
//         console.error(JSON.parse(this.response))
//         return false
//         }
//     }
//     xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
//     xhttp.send()
// }


// // Fuction Request All Methods
// const ajaxFuction = (urlDB, callback, method = 'GET', dataUser={}) => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             callback(JSON.parse(this.response))
//             return true
//         } else if (this.readyState === 4 && this.status === 404) {
//             console.error(JSON.parse(this.response))
//             return false
//         }
//     }
//     xhttp.open(method,urlDB)
//     if (method !== 'GET' && method !== 'DELETE'){
//         xhttp.send(JSON.stringify(dataUser))
//     } else {
//         xhttp.send()
//     }
// }




// // put y post
// const showUsers = (response) => {
//     let users = response
//     let usersList = ''
//     for(user in response ) {
//         let dataUsuario = response[user]
//         usersList += `
//             <li>${dataUsuario.name} ${dataUsuario.lastname} <a href="user.html?id=${user}">Ver usuario</a></li>
//         `
//     }
//     document.querySelector('.list__users').innerHTML = usersList
// }

// if(window.location.pathname === '/' || window.location.pathname === '/index.html'){
//     // estoy en home
//     requestAjax(
//     'https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/.json',
//     showUsers,
//     'GET')

// }

// const printUser = (arrData) => {  
//     console.log(arrData)
//     document.querySelector('#card__user').innerHTML = `
//     <img src="${arrData.urlPhoto}">
//     <h5 class="card-title name__user">${arrData.name}</h5>
//     <p class="card-text email__user">${arrData.lastname}</p>
//     `
// }

// if(window.location.pathname === '/user.html'){
//     let url = new URLSearchParams(location.search)
//     let id = url.get('id')
//     // estoy en home
//     requestAjax(
//     `https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/${id}.json`,
//     printUser,
//     'GET')
    
    
// }


// ajaxFuction(
//     'https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/.json',
//     showResponse,
//     'POST',
//     {
//         id: 5,
//         name: "Gabriela",
//         lastname: "Camarillo",
//         urlPhoto: "https://loremflickr.com/320/240/person"
//       }
// )

// Create user
const createNewUser  = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/.json')
    xhttp.send(
        JSON.stringify({
            name: "Jorge",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
// Read user
const   readUser  = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/.json')
    xhttp.send()
}

// Update and replace
const updateAndReplaceUser  = (idUser) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }

    xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge",
        lastname: "Camarillo",
        urlPhoto: "https://loremflickr.com/320/240/person"
      })
    )
}

// Update and modify 
const updateAndModifyUser  = (idUser) => {

    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge Luis"
      })
    )
}

// Delete 
const deleteUser  = (idUser) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
        }
    }
    xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/${idUser}.json`)
    xhttp.send()
    
}


// function request all methods
const requestAjax = (url, callback, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open(method, url)
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        // put, patch, post
        xhttp.send(JSON.stringify(data))
    }
}

// put y post
const showUsers = (response) => {
    let users = response
    let usersList = ''
    for(user in response ) {
        let dataUsuario = response[user]
        usersList += `
            <li>${dataUsuario.name} ${dataUsuario.lastname} <a href="user.html?id=${user}">Ver usuario</a></li>
        `
    }
    document.querySelector('.list__users').innerHTML = usersList
}


if(window.location.pathname === '/' || window.location.pathname === '/index.html'){
    // estoy en home
    requestAjax(
    'https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/.json',
    showUsers,
    'GET')

}

const printUser = (arrData) => {  
    console.log(arrData)
    document.querySelector('#card__user').innerHTML = `
    <img src="${arrData.urlPhoto}">
    <h5 class="card-title name__user">${arrData.name}</h5>
    <p class="card-text email__user">${arrData.lastname}</p>
    `
}

if(window.location.pathname === '/user.html'){
    let url = new URLSearchParams(location.search)
    let id = url.get('id')
    // estoy en home
    requestAjax(
    `https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/${id}.json`,
    printUser,
    'GET')
    
    
}