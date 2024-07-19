// Comparison and Logical Operators script
let x = 37
let y = 50

// >, <, &&
if(x > 10 && y < 30){
    console.log("(x > 10 && y > 30) condition true");
}
else{
    console.log("condition false");
}
// >=, <=, ||
if(x >= 10 || y <= 30){
    console.log("(x >= 10 || y <= 30) condition true");
}
else{
    console.log("condition false");
}
// ==, !
if(!(x==10)){
    console.log("!(x==10) condition true");
}
// ==, ===
let a = 267
let b = "267"
if(a == b){
    console.log("(a == b) condition true");
}
else{
    console.log("(a == b) condition false");
}

if(a === b){
    console.log("(a === b) condition true");
}
else{
    console.log("(a === b) condition false");
}
