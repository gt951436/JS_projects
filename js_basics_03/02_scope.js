// var c=350
let a = 23
if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log("inner value of a:", a);
}
// console.log(a)    // not defined
// console.log(b)   // not defined
// console.log(c)      // c is a var --> that's why it's not used much

function one() {
    const username = "GT"
    // console.log(username)

    function two() {   // CLOSURES -->functions bundles together
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
// one()

if (true) {
    const username = "GT"
    if (username === "GT") {
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

//---------------------INTERESTING------------------------------------------
// console.log(addOne(4))  // function can be executed before declaration --> HOISTING
function addOne(num) {
    return num + 1
}
// console.log(addOne(4))

// This type of function declaration  also known as Expression
//-----------------------------------------------------------------------------
// console.log(addTwo(5))  // Referance error
/* addTwo --> function assigned to variable -->cannot be executed before initialization*/
const addTwo = function (num) {
    return num + 2
}
// console.log(addTwo(5))
//---------------------------------------------------------------------------
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
