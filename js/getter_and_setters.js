let koder = {
    name : 'Elvira',
    lastname: 'Camarillo Luna',
    nickName: 'Elvi',
    gender: 'F',
    generation: 1,
    Birthday: '1991/03/23', 
    bootcamp: 'Python',
    weigth: 80,
    heigth: 1.55,
    modules: [
        {
            name: 'Front-End',
            averageModule: 10
        },
        {
            name: 'js',
            averageModule: 9
        },
        {
            name: 'BD',
            averageModule: 10
        },
    ],
    get age () {
        let today = new Date()
        let dateBirthday = new Date (this.Birthday)
        let age = today.getFullYear() - dateBirthday.getFullYear()
        let difMonth = today.getMonth() - dateBirthday.getMonth()
        if (
            difMonth < 0 || 
            (difMonth === 0 && today.getDate() < dateBirthday.getDate())
        ) {
            age --
        }
        return age
    },
    get fullName () {
        return this.name + ' ' + this.lastname
    },
    get averageBootcamp () {
        let assig = this.modules
        let total = assig.reduce((acc, cv) => {
            return acc + cv.averageModule
        },0) 
        console.log(total)
        return total / assig.length
    },
    get IMC () {
        return this.weigth / (this.heigth * this.heigth)
    },
    set boot (bootcamp) {
        this.bootcamp = bootcamp
    }
}
console.log(koder.fullName)
console.log(koder.averageBootcamp)
console.log(koder.age)


