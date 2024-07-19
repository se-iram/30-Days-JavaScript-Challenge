// Activity 1: if-else statements

// Task 1 check if number is positive, negative or zero
let number = -56;
if (number > 0) {
  console.log("number is positive");
} else if (number < 0) {
  console.log("number is negative");
} else {
  console.log("number is zero");
}

// Task 2 check if a person is eligible to vote(age >= 18)
let age = 20;
if (age >= 18) {
  console.log("Person is eligible to vote");
} else {
  console.log("Person is not eligible to vote");
}

// Activity 2: nested if-else statement

// Task 3 find largest of three numbers
let a = 38;
let b = 39;
let c = 46;

if (a > b) {
  if (a > c) {
    console.log("largest number is:", a);
  } else {
    console.log("largest number is:", c);
  }
} else {
  if (b > c) {
    console.log("largest number is:", b);
  } else {
    console.log("largest number is:", c);
  }
}

// Activity 3: Switch case

// Task 4 day of week based on numbber(1-7)
let dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Enter valid number 1-7");
    break;
}

// Task 5 assign grades based on marks
let marks = 67;
switch (true) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 70:
    console.log("B");
    break;
  case marks >= 50:
    console.log("C");
    break;
  case marks >= 40:
    console.log("D");
    break;
  case marks < 40:
    console.log("F");
    break;
  default:
    console.log("Enter valid marks");
    break;
}

// Activity 4: Conditional(Ternary) Operator

// Task 6 check number is even or odd
let num = 67;
let ans;
ans = num % 2 == 0 ? "number is even" : "number is odd";
console.log(ans, num);

// Activity 5: Combining Conditions

// Task 7 check if a year is leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400)
let year = 2024;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(year + " is a leap year.");
    } else {
      console.log(year + " is not a leap year.");
    }
  } else {
    console.log(year + " is a leap year.");
  }
} else {
  console.log(year + " is not a leap year.");
}
