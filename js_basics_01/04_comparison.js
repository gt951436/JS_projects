// comaprison operators
// >,<,>=,<=,==,!=

// console.log("02">1)  // do not do this,it will give unexpected results
// console.log("2">1)

// below operations also give unexpected results
// {==} and {>,<,>=,<=} work differently!

// {>,<,>=,<=} converts null to a number(0) that's why it's giving true!!!

// console.log(null > 0)
// console.log(null < 0)
// console.log(null >= 0)
// console.log(null <= 0)
// console.log(null == 0)
// console.log(null != 0)

// console.log(undefined > 0)
// console.log(undefined < 0)
// console.log(undefined >= 0)
// console.log(undefined <= 0)
// console.log(undefined == 0)
// console.log(undefined != 0)

// STRICT CHECK: === -->checks values as well as data types
//console.log("2"===2) //false

//-------------------------------------------------------------------------------------
//DATA TYPES

//PRIMITIVE : String,Number,Boolean,null,undefined,Symbol,BigInt
const id = Symbol('123')
const anotherId = Symbol("123")
//console.log(id === anotherId)

const bigNumber = 2526246735392848n //BigInt
//NON-PRIMITIVE(Reference type): in memeory,reference can be allocated directly
//Array,Objects,Functions

const heroes = ["shaktiman","naagraj","doga"]  //Array

let myObj={ // Object
    name:"Garv",
    age :20,
}

const myFun = function(){
    console.log("Hellew Duniya!")
    
}
console.log(typeof myFun)  //function type