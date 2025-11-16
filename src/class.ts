// class | OOP Programming 

// class Animal {
//     name: string; 
//     specing: string;
//     sound: string; 

//     constructor(name: string, specing: string, sound: string) {
//         this.name = name; 
//         this.specing = specing; 
//         this.sound = sound; 
//     }; 


//     makeSound() {
//         console.log(`${this.name} is making sound ${this.sound}`);
//     }; 
// }; 


// * Paramater Properties 


class Animal {
    // public name: string;
    // public specing: string;
    // public sound: string;

    constructor(public name: string, public specing: string, public sound: string) {
        // this.name = name;
        // this.specing = specing;
        // this.sound = sound;
    };


    makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
    };
}; 

const dog = new Animal("Dog bhai", "dog", "Ghew Ghew")

dog.makeSound()
console.log(dog.name);