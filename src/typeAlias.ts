// ? What is Type Alias? 


type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";
    contact: string;
    address: {
        divission: string;
        city: string
    }
}; 


const user : User = {
    id: 1234, 
    name : {
        firstName: "Rokeya", 
        lastName: "Khatun"
    }, 
    gender: "female", 
    address: {
        divission: "Rajshahi", 
        city: "Bagmara"
    }, 
    contact: "01884953018"
}; 

console.log(user);