let myDate = new Date()
// console.log(myDate)                       //gives unreadable output
// console.log(myDate.toString())           // atleast it's readable
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))                 // object

// let anotherDate = new Date(2024,2,16)       // Date constructor --> 0 indexed hote hain months in JS
// console.log(anotherDate.toDateString())

// let anotherDate = new Date(2024,2,16,5,45)
// console.log(anotherDate.toLocaleString())

// let anotherDate = new Date("03-16-2024")   // "YY-MM-DD" OR "MM-DD-YY"
// console.log(anotherDate.toLocaleString())
// console.log(anotherDate.getTime())

let timeStamp = Date.now()
console.log(timeStamp)


