// Activity 1: 
// Airthmetic Operations -------

let num1 = 62;
let num2 = 45;
let result;

//  Task 1 two numbers addition
result = num1 + num2;
console.log("Addition Result: ", result);

// Task 2 two numbers subtraction
result = num1 - num2;
console.log("Subtraction Result: ", result);

// Task 3 two numbers multiplication
result = num1 * num2;
console.log("Multiplication Result: ", result);

// Task 4 two numbers division
result = num1 / num2;
console.log("Division Result: ", result);

// Task 5 finding remainder 
result = num1 % num2;
console.log("Remainder Result: ", result);


// Activity 2:
// Assignment Operators -------

// Task 6 using += operator for adding a number to variable 
num1 += 12          // equals to  num1 = num1 + 12
console.log("Result of assignment operator += is: ", num1);

// Task 7 using -= operator for subtracting a number from variable 
num1 -= 10          // equals to  num1 = num1 - 10
console.log("Result of assignment operator -= is: ", num1);

// Activity 3:
// Comparison Operators -------

// Task 8 compare two numbers using > and <
if(num1>num2){
    console.log(num1, "is greater than", num2);
}
else{
    console.log(num1, "is not greater than", num2);
}

if(num1<num2){
    console.log(num1, "is smaller than", num2);
}
else{
    console.log(num1, "is not smaller than", num2);
}

// Task 9 compare two numbers using >= and <=
if(num1 >= num2){
    console.log(num1, "is greater than or equal to", num2);
}
else{
    console.log(num1, "is neither greater than nor equal to ", num2);
}
if(num1 <= num2){
    console.log(num1, "is smaller than or equal to", num2);
}
else{
    console.log(num1, "is neither smaller than nor equal to ", num2);
}

// Task 10 compare two numbers (equal or not) using == and === operator
// The == operator performs a loose equality comparison that performs type coercion if necessary to make the comparison possible.
const a = 35
const b = '35'
console.log(a==b); //true

// The === operator performs a strict equality comparison that does not perform type coercion and requires the operands to have the same type (as well as the same value).
const x = 35
const y = '35'
console.log(x===y); //false

// Activity 4: Logical Operators

// Task 11 use AND (&&) operator
// AND operator gives true if all conditions becomes true otherwise false
// num1 = 62;
// num2 = 45;
result = num1 > 20 && num2 < 40
console.log("&& operator result:", result); //false

// Task 12 use OR (||) operator
// OR operator gives true if any one condition becomes true, if all are false then gives false
result = num1 > 20 || num2 < 40
console.log("|| operator result:", result); //true

// Task 13 use NOT (!) operator to negate condition
result = !(num2 < 40)
console.log("! operator result:", result); //true

// Activity 5: Ternary Operator
// Task 14 check if number is positive or negative
let num = -34
result = (num >= 0) ? "number is positive" : "number is negative"
console.log("Ternary operator result:", result); 
