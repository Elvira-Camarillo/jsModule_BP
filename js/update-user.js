// const printUserToUpdate = (response) => {
//     let userDetail = ''
//     for(user in response ) {
//         let dataUsuario = response[user]
//         console.log(dataUsuario)
        
//         userDetail += `
//         <div class="form-floating mb-3">
//             <input type="text" class="form-control" id="name__input" >
//             <label for="name__input" class="form-label">Nombre(s)${dataUsuario.name}</label>
//         </div>
//         <div class="form-floating mb-3">
//             <input type="text" class="form-control" id="lastname__input" >
//             <label for="lastname__input" class="form-label"> Apellido(s)${dataUsuario.lastname}</label>
//         </div>
//         <div class="form-floating mb-3">
//             <input type="text" class="form-control" id="photo__input" placeholder="Url photo" >
//             <label for="photo__input" class="form-label">Url de foto${dataUsuario.urlPhoto}</label>
//         </div>
//         `
//         console.log(userDetail)
//     }
//     document.querySelector('detail__user').innerHTML = userDetail
// }

// if(window.location.pathname === '/update-user.html'){
//     let url = new URLSearchParams(location.search)
//     let id = url.get('id')
//     // estoy en Actualizar
//     requestAjax(
//     `https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/${id}.json`,
//     printUserToUpdate,
//     'GET')    
// }

// print user

let url = new URLSearchParams(location.search)
let idUser = url.get('id')

const updateFormUser = () => {
    if(idUser !== '') {
        let urlGEt = `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`
        requestAjax(urlGEt, printUserInfo,'GET')
    } else {
        document.getElementById('alert__form').innerText = 'El usuario no existe'
        document.getElementById('alert__form').classList.remove('d-none')
    }
}

const printUserInfo = (obj) => {
    if(obj) {
        document.querySelector('#name__input').value = obj.name
        document.querySelector('#lastname__input').value = obj.lastname
        document.querySelector('#photo__input').value = obj.urlPhoto
    }
}

updateFormUser()


// listener
let btn__update__user = document.querySelector('.btn__update__user')
if(btn__update__user) {
    btn__update__user.addEventListener('click', () => {
        console.log('sending form')
        // obtener los datos a guardar
        let name = document.querySelector('#name__input').value
        let lastName = document.querySelector('#lastname__input').value
        let urlPhoto = document.querySelector('#photo__input').value
        // validacion
        if(name === '' || lastName === '' || urlPhoto === '') {
            document.getElementById('alert__form').innerText = 'Todos los datos son obligatorios'
            document.getElementById('alert__form').classList.remove('d-none')
            setTimeout(()=> {
                document.getElementById('alert__form').classList.add('d-none')
            }, 3000)
        } else {

            let userToUpdate = {
                lastname: lastName,
                urlPhoto: urlPhoto,
                name: name,
            }
            console.log(userToUpdate)

            requestAjax(
                `https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/${idUser}.json`,
                redirectToUsers,
                'PATCH',
                userToUpdate
            )
        }
    })
}