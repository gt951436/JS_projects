// if statement
const isUserLoggedIn = true

// >,<,>=,<=,==,===,!=,!==

// if (2 == "2") { //true  
//     console.log("executed")
// }
// else{

// }

// if (2 === "2") { //false  
//     console.log("executed")
// }
// else{

// }
//-----------------------------------------------

// switch (3) {
//     case 1:
//         console.log("jan")
//         break
//     case 2:
//         console.log("feb")
//         break
//     case 3:
//         console.log("mar")
//         break
//     default:
//         break
// }
//-----------------------------------------------------
//TRUTHY AND FALSY VALUES
const user = []
// if(user){
//     console.log("got user email")
// }
// else{
//   console.log("don't have user email")
// }

// Falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values  --> all other values are truthy
// "0",'false'," ",[],{},function(){}

// false==0,false==''/"",0==""/''  --> true

const emptyObj = {}

// if (Object.keys(emptyObj).length == 0) { //  Object.keys()--> returns array of keys
//     console.log("object is empty")
// }
//-------------------------------------------------------------------------------------

// Nulling Coalescing Operator(??) : for null and undefined only

let val1
// val1 = 5 ?? 10  // 5
// val1 = null ?? 11   // 11
// val1 = undefined ?? 13  // 13
// val1 = null ?? 12 ?? 14 // pehli non-null/non-undefined value assigne hogi --> 12
// console.log(val1)

//--------------------------------------------------------------------------------

// Ternary operator : (condition) ? (true) : (false)


