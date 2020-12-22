let obj = {
    email: 'gcamarilloluna@gmail.com',
    name: 'Ruben',
    lastname: 'Flores',
    age: 29,
    assigment: [
        {
            na: 'Español',
            ave: 90
        }, 
        {
            na: 'Matemáticas',
            ave: 100
        }, 
        {
            na: 'Ciencias',
            ave: 90
        }
    ],
    getfullname: function() {
        return this.name + ' ' + this.lastname
    },
    saltar: function () {
        return `${this.name} esta saltando`
    },
    getYearsOld: function () {
        return `${this.age} años`
    },
    getAverage: function name() {
        let assigments = this.assigment
        let total = assigments.reduce((acc, cv) => {
            return acc + cv.ave
        },0) 
        return total / assigments.length
    }
}

console.log(obj.getfullname())
console.log(obj.saltar())
console.log(obj.getYearsOld())
console.log(obj.getAverage())

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
    getAge: function () {
        let today = new Date()
        console.log(today)
        let dateBirthday = new Date (this.Birthday)
        console.log(dateBirthday)
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
    fullName : function () {
        return this.name + ' ' + this.lastname
    },
    getAverageBootcamp: function () {
        let assig = this.modules
        let total = assig.reduce((acc, cv) => {
            return acc + cv.averageModule
        },0) 
        console.log(total)
        return total / assig.length
    },
    getIMC: function () {
        return this.weigth / (this.heigth * this.heigth)
    },
    setBootcamp: function (bootcamp) {
        this.bootcamp = bootcamp
    }
}

console.log(koder.getAge())
console.log(koder.fullName())
console.log(koder.getAverageBootcamp())
console.log(koder.getIMC())
console.log(koder.setBootcamp('js'))
console.log(koder)

