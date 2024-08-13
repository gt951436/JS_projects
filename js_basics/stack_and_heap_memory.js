//Stack : all primitive data types use stack memory
//Heap : all non-primitive data types use heap memory

let myName = "Garv"
let anotherName = myName
anotherName = "Tyagi" // overwrite ho gayi anothername ki value in stack(copy create hoti hai)
// console.log(myName)
// console.log(anotherName)

let userOne = {
    emailId : "abc@gmail.com",
    upiId:"xyz@ybl"
}
let userTwo = userOne // variable is defined in stack but reference from heap is original
userTwo.emailId = "xyz@google.com"
console.log(userOne.emailId)  // same value as userTwo.email due to referenece from heap
console.log(userTwo.emailId) // heap me copy create nahi hoti by reference call hota hai