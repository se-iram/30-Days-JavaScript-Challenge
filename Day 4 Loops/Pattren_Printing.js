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