//  * mapped types 

//  map 


const arrayOfNumbers : number[] = [1, 4, 6]; 

const arrayOfStrings : string[] = ["1", "4", "6"]; 

const arrayOfStringsUsingMapped : string[] = arrayOfNumbers.map(num => num.toString()); 

console.log(arrayOfStringsUsingMapped);