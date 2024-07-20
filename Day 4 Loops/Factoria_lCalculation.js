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