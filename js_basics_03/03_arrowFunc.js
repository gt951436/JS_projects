// const userData = {
//     username: "GT",
//     price: 100,
//     welcomeMsg: function () {
//         console.log(`${this.username},welcome to website`)
//         // console.log(this)  // whole context
//     }
//     // "this" keyword uses the current context
// }
// user.welcomeMsg()
// user.username = "BRB"  // current context updated
// user.welcomeMsg()

// global context of node enviroment --> {} , In browser,Global context --> window
// console.log(this) 
//------------------------------------------------------------------------------------
// function func(){
//     let username = "GT"
//     console.log(this.username)  // undefined --> "this" keyword -->only works with objects
// }
// func()
//------------------------------------------------------------------------

// const val = function(){
//     let username = "GT"
//     console.log(this)   // this --> does give weird things
// }
//------------------------------------
// ARROW FUNCTIONS --> this keyword --> return {}

// const val = ()=>{
//     let username = "GT"
//     console.log(this) // return {}
// }
// val()

// const sum = (num1, num2) => { // ARROW FUNCTIONS
//     return num1 + num2
// }


// const sum = (num1, num2) => { // ARROW FUNCTIONS -->Explicit return
//     return num1 + num2
// }


// ARROW FUNCTIONS --> Implicit return --> without using return keyword
// const sum = (num1, num2) =>  (num1 + num2)
// console.log(sum(4, 6))  // 10

//----------------------------------------------------
// RETURNING OBJECT --> USING ARROW FUNCTION

// const user = (user1, user2) => ({
//     username: "GT",
//     age: 20,
//     job: "SWE"
// })
// let user1 = 'a'
// let user2 = 'b'
// console.log(user(user1, user2))
//-----------------------------------------------------

// const arr = [3, 5, 4, 2, 7]
// arr.forEach(()=>())
//---------------------------------------------------
//Immediately Invoked Function Expression (IIFE)

/* global scope ke pollution se functions ko bchane ke liye we use
IIFE*/

/*IIFE ko nahi pta scope kahan rokna hai to use semicolon(;)*/

// (function definition)(execution)
(function func() {
    console.log("DB CONNECTED") // definition ke saath saath execution
})();

(function func2() {  // named IIFE
    console.log("DB CONNECTED again") // definition ke saath saath execution
})();

((name) => {  // arrow function IIFE --> unnamed IIFE
    console.log(`DB CONNECTED again too,${name}`) // definition ke saath saath execution
})("Garv");
