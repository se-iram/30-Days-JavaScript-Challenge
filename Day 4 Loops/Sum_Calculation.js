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