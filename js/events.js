const filterKoderSelectAD = (arr) => {
    let order = document.getElementById('order_list').value
    let fakeArr = [...arr]
    let orderArray = fakeArr.sort()
    if (order === 'a') {
        return orderArray
    } else if (order === 'd'){
        return orderArray.reverse()
    } else {
        return fakeArr
    }
}

const filterKoderSelectAZ =( letter )=> {
    let filtrados = kodersArr.filter( (koder) => {
        return  koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    return filtrados
}

// const filterAZ = () => {
//     let valorderaz = document.getElementById('orderLetter').value
//     let arrarKoders = filterKoderSelectAZ(valorderaz ? valorderaz:'')
//     let resultadoKoders = filterKoderSelectAD(arrarKoders)

//     console.log(arrarKoders)
//     console.log(resultadoKoders)

//     addElements('#lista', resultadoKoders.length, resultadoKoders)
// }
const filterAZ = () => {
    let valorderad = document.getElementById('order_list').value
    console.log(valorderad)
    let valorderaz = document.getElementById('orderletter').value
    let resultadoKoders = filterKodersSelectAD(kodersArr)
    console.log(resultadoKoders)
    let arrayKoders = filterKodersSelectAZ(valorderad)
    console.log(arrayKoders)
    addElements('#lista', resultadoKoders.length , arrayKoders)
}
