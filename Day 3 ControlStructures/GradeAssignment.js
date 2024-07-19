function assignGrades(marks) {
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
}
let marks = 67;
assignGrades(marks)
