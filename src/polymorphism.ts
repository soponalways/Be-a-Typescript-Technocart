//* Polymorphisom ==> bohurupi 

class Person {
    getSleep() {
        console.log(`I am a normal happy person. so i sleep 10 hours`);
    }
}

class Student extends Person {
    getSleep(): void {
        console.log(`I am a Student. so i sleep 8 hours`);
    }
}


class NextLevelDeveloper extends Person {
    getSleep(): void {
        console.log(`I am a Next Level Develoepr. so i sleep 6 hours`);
    }
}; 

const getPersonSleepInfo = (param: Person) => {
    param.getSleep(); 
}

const person1 = new Person(); 
const person2 = new Student(); 
const person3 = new NextLevelDeveloper(); 

getPersonSleepInfo(person3)



class Shape {
    getArea() : number {
        return 0 ; 
    }
}; 


class Cirlce extends Shape {
    radius : number; 
    constructor(raduis: number) {
        super(); 
        this.radius = raduis
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius; 
    }
}; 


class ReactAngle extends Shape {
    height: number; 
    widht: number; 
    constructor(height: number, width: number) {
        super(); 
        this.height = height; 
        this.widht = width
    }
    getArea(): number {
        return this.height * this.widht; 
    }
}

const  getArea = (param: Shape ) => {
    console.log(param.getArea());
}

const normalShape = new Shape(); 
const circle = new Cirlce(50); 
const rectangle = new ReactAngle(50, 100) 

getArea(rectangle); 