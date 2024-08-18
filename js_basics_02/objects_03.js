// Objects can be declare in two ways-->as a literal/as a constructor

// constructor se object declare karenge-->SINGLETON bnega
// else  --> not singleton(has multiple instances)

//Object.create()  // constructor--> create
//Object literals
const mySymbol = Symbol()
// console.log(mySymbol)

const user = {
    name: "Garv",
    "full name": "Garv Tyagi",  // this can't be accessed using "." operator
    [mySymbol]: "myKey1",
    age: 20,
    location: "RRKEE",
    email: "gt@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Friday"]
}
// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])  // cannot access the "full name" with "."
// console.log(user[mySymbol])    //  to access a symbol,we use square brackets.

// user.email = "gt@gmail.com"
// console.log(user.email)

// Object.freeze(user)  // restrict the changes to the object attributes after freezing

// user.email = "gtx"
// console.log(user.email)

user.greeting = function () {
    console.log("Hello JS user")
}
user.greetingtwo = function(){
    console.log(`hello JS user,${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingtwo())
