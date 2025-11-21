// * OOP: Instance of Type guard / type narowing

class Person {
    name: string; 
    constructor (name: string) {
        this.name = name; 
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} doinik ${numberOfHours} ghonta ghumai`);
    }
}

class Student extends Person {
    constructor (name: string) {
        super(name)
    }

    doStudy (numberOfHours: number){
        console.log(`${this.name} doinik ${numberOfHours} ghonta boi pore`);
    }
}

class Teacher extends Person {
    constructor(name: string){
        super(name)
    }

    takeClass(numberOfHours: number) {
        console.log(`${this.name} doinik ${numberOfHours} class nei`);
    }
}


const getUserInfo = (user: Person) => {
    if(user instanceof Student) {
        user.doStudy(14)
    } else if(user instanceof Teacher) {
        user.takeClass(10)
    } else {
        user.getSleep(16)
    }
}

const student1 = new Student("Rokeya")
const teacher1 = new Teacher("Sopon")

getUserInfo(teacher1)