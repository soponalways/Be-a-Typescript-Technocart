// ovject destructring 
// array destructring 


const user = {
    id : 1234 , 
    name: {
        fistName: "Sopon", 
        middleName: "Rokeya", 
        lastName: "Islam"
    }, 
    favoriteColor: "Black", 
    gender: "Male"

}

// const middleName = user.name.middleName
// console.log(middleName);

const {favoriteColor: myFavoriteColor, name : {middleName: myJan} } = user; 
console.log(myJan);
// console.log(myFavoriteColor);

// console.log(user);



