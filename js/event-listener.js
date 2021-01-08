let showAll = document.getElementById('showAll')
showAll.addEventListener('click',function(){
    addElements('#lista', kodersArr.length, kodersArr)
})

//Accionar los filtro con  un eventLsitener
let listDes = document.getElementById('order_list')
listDes.addEventListener('change',function(){
    filterAZ()
})

let listDesAZ = document.getElementById('orderLetter')
if(listDesAZ =!  null ){
    listDesAZ.addEventListener('change',function(){
        filterAZ()
    })
}


let search = document.getElementById('search')
listDes.addEventListener('keyup',function(){
    
})


