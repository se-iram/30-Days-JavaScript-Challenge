// 1. Varaible Types Console Log 

// primitive data types -------
//number
let number = 342 
console.log(number);
console.log(typeof number);

//string
let string = "string string..." 
console.log(string);
console.log(typeof string);

//boolean
let bool = false 
console.log(bool);
console.log(typeof bool);

//null
let nul = null 
console.log(nul);
console.log(typeof nul);

//undefined
let undef; 
console.log(undef);
console.log(typeof undef);

//symbol
let sym = Symbol("Programming Practice") 
console.log(sym);
console.log(typeof sym);

//BigInt
let bigInteger = 123341222444444444n 
console.log(bigInteger);
console.log(typeof bigInteger);


// non-primitive data types -------

//object
let person = {      
    name: "John",
    age: 56
}
console.log(person.name);
console.log(person.age);
console.log(person + "is of data type " + typeof person);

//array
let array = [45, 34, 78, 34]
console.log(array);
console.log(typeof array);

//function
function message() {
    console.log("function running ....");
}
message()
console.log(message);
console.log(typeof message);


// 2. Reassignment Demo

let score = 45
console.log(`value of score before reassignment is: ${score}`);
score = 900 // reassignment is allowed
console.log(`Value after reassignment is: ${score}`);

const total = 560
console.log(`value of total before reassignment is: ${total}`);
total = 1000 // reassignment is not allowed
// TypeError: Assignment to constant variable. 
console.log(`value of total after reassignment is: ${total}`);

