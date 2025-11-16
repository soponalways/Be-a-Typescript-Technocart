class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    };

    getSleep(numberOfHours: number) {
        console.log(`${this.name} ${numberOfHours} ghonta ghumai`);
    }
}

class Student extends Person {
  
}

const student1 = new Student("Mr. Fakibaz", 17 ,"Rangpur Bangladesh")

student1.getSleep(16); 


class Teacher extends Person {
    designation: string // * own property

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    };

    getSleep(numberOfHours: number) {
        console.log(`${this.name} ${numberOfHours} ghonta ghumai`);
    }
    takeClass(numberOfClass: number) {
        console.log(`${this.name} ${numberOfClass} classes nei`);
    }
}; 

const teacher1 = new Teacher("Mr. Smart", 25, "dhaka Bangladesh", "Sinior Teacher"); 
teacher1.takeClass(5); 