// Asynchronous JavaScript and XML
// JSON
// XML

// XMLHttpRequest

const loadUsers = () => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return
        } else {

            if( request.status >= 200 && request.status < 300) {
                const response = request
                console.log(response)
                const dataUSer = JSON.parse(response.responseText)
                let listUsers = ''
                dataUSer.forEach(user => {
                    listUsers += `<li>${user.name}, ${user.phone}, <a href="${user.website}"> Ir al sitio Web</a></li>`
                    console.log(listUsers)
                });
                document.querySelector('.list_users').innerHTML = listUsers

            } else {
                console.log('No se puso ejecutar')
            }
        }
    })
    request.open ('GET','https://jsonplaceholder.typicode.com/users')
    request.send()
}

// loadUsers()
document.getElementById('getusers').addEventListener('click', loadUsers)
// window.addEventListener('load', loadUsers)


