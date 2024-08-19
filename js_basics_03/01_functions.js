function myName() {
    console.log("Garv")
    console.log("Tyagi")
}
//myName  // reference of function
// myName()  // execution of function

function add1(num1, num2) {
    console.log(num1 + num2)
}

function add2(num1, num2) {
    return (num1 + num2)
}

// const result = add1(3,5) // undefined result --> add1 --> does not return anyything
// const result = add2(3,5)
// console.log(result);

function userLoggedIn(username) {
    if (!username)  // if(username === undefined)
        return "please enter a username"
    return `${username} just logged in`
}
// username--> if nothing is passed as argument --> undefined 
// console.log(userLoggedIn())

function cartTotal(val1, val2, ...num1) {  // ...nums--> rest operator/spread operator
    return num1;
}
// console.log(cartTotal(2344,3425,3421))

const user = {
    name: "GT",
    age: 20,
    id: "gt@gmail.com"
}
function handleObject(obj1) {
    console.log(`UserName is ${obj1.name} and age is ${obj1.age}`)
}
// console.log(user)
handleObject({
    name: "lc",
    age: 20
})


