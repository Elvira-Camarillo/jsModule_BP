
// GET 
const getData = (url, funcionALlamar, selector, method = 'GET') => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                
                funcionALlamar(selector, objectResponse)
            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    
    })
    request.open(method,url)
    request.send()
}

const printUsers = (selector, arrData) => {
    console.log(arrData)
    let listData =  ''
    arrData.forEach(user => {
        listData += `<li>${user.name} ${user.phone} <a href="user.html?id${user.id}">Ver usuario</a></li>`
    });
    document.querySelector(selector).innerHTML = listData
}

const printPosts = (selector, arrData) => {
    let listData =  ''
    arrData.forEach(user => {
        listData += `<li>${user.id}. ${user.title} ${user.body} </li>`
    });
    document.querySelector(selector).innerHTML = listData
}

const prinUSer = (selector, arrData) =>{


}
const userLocation = window.location;
if (userLocation.pathname === '/user.html') {
    let url = new URLSearchParams(location.search)
    let id = url.get('id')

    if ( id >= 1 && id < 11){
        getData(`https://jsonplaceholder.typicode.com/users/${id}`,printUser, '#card_user')
    } else {
        document.querySelector('#card_user'.innerHTML) = `
         <p class = "card_text email_user"> El usuario no existe</p>
        `
    }
}

// Nuevo usuario

let newUser = {
    id: 1,
    lastname: "Camarillo",
    name: "Jorge",
    urlPhoto: "https://loremflickr.com/320/240/person"
}

// loadUsers()

document.getElementById('getusers').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/users', printUsers, '.list__users')
})

document.getElementById('getposts').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__post')
})


const urlDB = 'https://koders1gpython-default-rtdb.firebaseio.com/elvira/'

const createNewUSer = ( ) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if( request.readyState !== 4){
            return
        } else{
            if(request.status >= 200 && request.status <= 299){
                console.log(JSON.parse(request.responseText))
            } else{
                console.log(JSON.parse(request.responseText))
            }
        }
    })
    request.open('POST',`${urlDB}/users/.json`)
    
    request.send(
        JSON.stringify({
            id: 2,
            name: "Luis",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}


