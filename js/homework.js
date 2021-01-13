const showResponse = (response) => {
    console.log(response)
}

const getUserData = () =>{
    let name = document.getElementById("user_name").value
    let lastName = document.getElementById("user_lastName").value
    let urlPhoto = document.getElementById("user_url").value
    
    if (name === '' || lastName === '' || urlPhoto === ''){
        document.getElementById('alert_form').classList.remove('d-none')
        setTimeout(()=>{
            document.getElementById('alert_form').classList.add('d-none')
        },300)
    } else {
        let userObject = {name, lastName, urlPhoto}
        console.log(userObject)
        ajaxFuction(
        'https://koders1gpython-default-rtdb.firebaseio.com/elvira/users/.json',
        showResponse,
        'POST',
        userObject
    )
    }
    
}

let sendButton = document.getElementById("btn_send_user")

sendButton.addEventListener("click",function(){
    getUserData()
})