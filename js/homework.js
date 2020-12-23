// HomeWork 
// onchange()
// Construir una funcion con filter 
// ocupar un método
// innerHTML
// lo tieene que separar el selector

// document.getElemntByID('orden').value

const orderKoder = () => {
    let order = document.getElementsById('orderList').value
    let listOrder = kodersArr.sort()
    if(order === 'a') {
        addElements('#lista',listKoders, listOrder)
        return listOrder
    } else if (order === 'd'){
        addElements('#lista',listKoders, listOrder.reverse())
    }
    // return order === 'A' ? listOrder : listOrder.reverse()
}

