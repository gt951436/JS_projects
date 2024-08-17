// let name = "Garv"
let name = new String('Garv-Tyagi-com')
// let repoCnt = 15
// console.log(name + repoCnt + " value")  // outdated way to concatenate

// modern way --> string interpolation --> use back ticks(``)
// console.log(`my name is ${name} and my repo-count is ${repoCnt}`)  

// console.log(name[0])
// console.log(name.toUpperCase()) // original value of name does not change
// console.log(name.__proto__)  // returns object --> {}
//console.log(name.length)
// console.log(name.charAt(2))  // returns the character at index i
// console.log(name.indexOf('r')) // returns the index of the character

// const newStr = name.substring(0,4) // 4 is not included
// console.log(newStr)

// const newStr2 = name.slice(-8,-1)  // slice mein negative values bhi paas ho sakti hai.
// last ke -1(second last char) se -7 tak ke characters dega!(reverse mein) 
// console.log(newStr2)

// const str1 = "  garv-Tyagi  "
// console.log(str1)
// console.log(str1.trim())  // extra spaces ko trim kar dega without modifying the og string

// const url = "www.google.com/home%20values"
// console.log(url.replace("%20","-")) // replace "%20" with "-"
// console.log(url.includes("%20"))   // returns boolean value

console.log(name.split("-"))  // split karne pe array dega






