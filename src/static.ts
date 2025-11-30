//* Static 


class Counter {
    static count = 0 ; 

    static increment() {
        return Counter.count = Counter.count + 1
    }

    static decrement() {
        return Counter.count = Counter.count - 1
    }
}; 


// const instance1 = new Counter(); //* new Memorey location 

// console.log(instance1.increment()); 
// console.log(instance1.increment()); 
// console.log(instance1.increment()); 



// const instance2 = new Counter(); //* new or Different memory location 

// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment()); 


console.log(Counter.increment());
console.log(Counter.increment());
