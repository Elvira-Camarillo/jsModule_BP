// let obj = {
//     key: value,
//     key: value,
//     key: value,
// }

let person = {
    name: 'Elvira',
    isKoder: true,
    age: 29,
    location: {
        street: 'Nochebuena',
        cp: 55712
    },
    credential: {
        street: 'Nochebuena',
        cp: 55712
    },
    pets:['puppy','scooby']

}

// console.log(person.name)
// console.log(person.pets[1])

// let person2 = new Object()
// person2.name='Naye'
// person2.isKoder = true
// person2.age=20
// person2.location = {cp : '55712'}

// console.log(person2)

// Imprima ni nombre es Elvira y vivo en la calle xxx
console.log(`
    Mi nombre es ${person.name} 
    y vivo en la calle ${person.location.street} 
    con el CP ${person.location.cp}
`)

// Métodos de Objetos
// Imprime los va
for (item in person){
    console.log(person[item])
}

// Imprime los valores en que tiene el objeto en la propiedad location
for (item in person['location']){
    // console.log(person['location'][item])
    console.log(`${item}: ${person['location'][item]}`)
}

// for (item in person){
//     if ( item === 'location') {
//         for (item2 in person[item]){
//             console.log(`${item}:${person[item][item2]}`)
//         }
//     }
// }

let person2  = person
delete person.credential.key2

let koders = [
    {
        name: 'Jorge',
        isKoder: true,
        average: 9,
        pets:['puppy','scooby']
    
    },{
        name: 'Elvira',
        isKoder: true,
        average: 10,
        location: {
            street: 'Nochebuena',
            cp: 55712
        },
        pets:['puppy','scooby']
    
    }
]

// Imprime el promedio de los promedios.
koders.forEach((current) => {
    console.log(current['average'])
});

// Promedio del grupo Koders
let averageKoders = koders.reduce((acc, cv)=>{
    return (acc + cv.average)
},0) / koders.length
console.log(averageKoders)

// Koders con promedio mayor a 9
let koderAv9 = koders.filter( (cv) => {
    return cv.average > 9
})
console.log(koderAv9)

// Koders con locations
let koderLocation = koders.filter(cv => {
    if (cv.location){
        return cv
    }
})
console.log(koderLocation)