// Activity 1: For Loop ***************

// Task 1
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log("number: ", i);
  }
}
printNumbers();

// Task 2
// Table of 5
function table() {
  for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${(5 * i)} \n`);
  }
}
table();

// Activity 2: While Loop *************

// Task 3
// printing sum of 1-10 numbers
function sumOfNum() {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum = sum + i;
    i++;
  }
  return sum;
}
console.log("Sum of 1-10 numbers is:", sumOfNum());

// Task 4
// printing reverse 10-1 numbers
function reverse() {
  let i = 10;
  while (i >= 1) {
    console.log("number:", i);
    i--;
  }
}
reverse();

// Activity 3: Do While Loop **************

// Task 5
// printing 1-5 numbers
function numberPrint() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}
numberPrint();

// Task 6
// factorial of number
function findFactorial(num) {
  let i = 1;
  let fact = 1;
  do {
    fact = fact * i;
    i++;
  } while (i <= num);
  return fact;
}
let factNumber = 8;
console.log("Factorial of", factNumber, "is:", findFactorial(factNumber));


// Activity 4: Nested Loops ***********

// Task 7
function printPattern() {
    for(let i = 1; i<=5; i++ ){
        let s = ""
        for(let j = 1; j < i; j++){
            s += "*"
        }
        console.log(s);
    }
}
printPattern()


// Activity 5: LoopControl Statements *********

// Task 8
for(let i = 1; i <= 10; i++){
    if(i==5){
        continue
    }
    else {
        console.log(i);
    }
}

// Task 9
for(let i = 1; i < 10; i++){
    if(i==7){
        break
    }
    else {
        console.log(i);
    }
}