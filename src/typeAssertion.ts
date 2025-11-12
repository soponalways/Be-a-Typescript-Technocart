let anything : any; 

(anything = "Rokeya" as string)
console.log(anything);


const kgToGramConverter = (input : number | string) : number | string | undefined => {
    if(typeof input === "number") {
        return input * 1000; 
    } else if(typeof input === "string") {
        const [value] = input.split(" "); 
        return `Converted weigth is: ${Number(value) * 1000}`
    }
}; 

const result1 = kgToGramConverter(5) as number; 
console.log(result1);
const result2 = kgToGramConverter("2 KG") as string; 
console.log(result2);


// ? That is the main handling case of Type Assertaion 

type CoustomeError = {
    message: string
}

try {

} catch (err) {
    console.log((err as CoustomeError).message);
}