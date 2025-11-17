type NormalUser = {
    name: string; 
}; 

type AdimnUser = {
    name: string;
    role: string; 
}; 


const getUserInfo = (user: NormalUser | AdimnUser) => {
    if("role" in user) {
        console.log(`this user is: ${user.name} and her role is: ${user.role}`);
    } else {
        console.log(`My love is ${user.name}`);
    }
}; 

getUserInfo({name: "Rokeya", role: "Admin"})