// var c=350
let a = 23
if (true) {
    let a = 10
    const b = 20
    c = 30
    console.log("inner value of a:", a);
}
console.log(a)    // not defined
// console.log(b)   // not defined
// console.log(c)      // c is a var --> that's why it's not used much
