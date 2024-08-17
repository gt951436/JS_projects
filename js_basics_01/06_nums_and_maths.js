const score = 400
// console.log(score)
const newScore = new Number(100)
// console.log(newScore.toString().length)
// console.log(newScore.toFixed(2))

const otherNum = 23.67454
// console.log(otherNum.toPrecision(2))  //1-21 tak precison value can be taken

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'))  // zeroes mein commas lgaadenge 'IN'(INDIAN) standard mein!

//-------------------------------------------------------------------------------------------------

/* MATHS*/

// Math -->Object that provides maths
// console.log(Math)
//console.log(Math.abs(-34))
// console.log(Math.random())
// console.log((Math.random() * 10) + 1)
// console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20
const r = Math.random()
console.log(r)
// IMPortant LINE
console.log(Math.floor(r * (max - min + 1)) + min)





