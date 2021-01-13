const getUserData = () =>{
    let name = document.getElementById("user_name").value
    let lastName = document.getElementById("user_lastName").value
    let urlPhoto = document.getElementById("user_url").value
    
    let userObject = {name, lastName, urlPhoto}
    console.log(userObject)
    ajaxFuction(
    'https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/.json',
    showResponse,
    'POST',
    userObject
)
    
}

let sendButton = document.getElementById("btn_send_user")

sendButton.addEventListener("click",function(){
    console.log('Si envio la información')
    getUserData()
})