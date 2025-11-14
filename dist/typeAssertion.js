"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
(anything = "Rokeya");
console.log(anything);
const kgToGramConverter = (input) => {
    if (typeof input === "number") {
        return input * 1000;
    }
    else if (typeof input === "string") {
        const [value] = input.split(" ");
        return `Converted weigth is: ${Number(value) * 1000}`;
    }
};
const result1 = kgToGramConverter(5);
console.log(result1);
const result2 = kgToGramConverter("2 KG");
console.log(result2);
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=typeAssertion.js.map