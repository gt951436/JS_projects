// for of
// ["","",""]
// [{},{},{}]

const arr = [1, 3, 2, 4, 6]
// for (const val of arr) {
//     console.log(val)
// }
const greetings = "Hello World"
// for (const char of greetings) {
//     console.log(char)
// }

//--------------------------------------------------------
// MAPS
const map = new Map()
map.set('a', 5)
map.set('b', 7)
map.set('c', 4)
// console.log(map)

// for (const pair of map) {
//     console.log(pair)
// }

// FOR KEYS ONLY
// for (const [key,value] of map) {
//     console.log(key)    
// }

// FOR VALUES ONLY
// for (const [key,value] of map) {
//     console.log(value)    // for values only
// }

// for (const [key,value] of map) {
//     console.log(key,value)    // for values only
// }
//--------------------------------------------------------------------

// OBJECTs ARE NOT ITERABLE with forof loop
const myObj = {
    "game1": "NFS",
    "game2": "COC",
    "game3": "GoW"
}
// for (const [key, value] of myObj) {
//     console.log(key, value)
// }

// FOR-IN LOOP --> always return keys in for(const key in arr)

// for (const key in myObj) {   // returns keys
//     console.log(key)
// }
// for (const key in myObj) {
//     console.log(`${key} is the key for ${myObj[key]}`)
// }

// array ki keys --> indices (starting from 0)
// for (const key in arr) {
//     console.log(key)
// }

// for (const key in arr) {
//     console.log(arr[key])
// }
//-----------------------------------------------------------
// maps are non iterable with for-in loop
// for (const [key,value] in map) {
//     console.log(key)

// }

//---------------------------------------------------------------------------
//FOR-EACH LOOP

const arr2 = ['3', 5, 64, 65, 73]

// arr2.forEach(function (valInArr) {
//     console.log(valInArr)
// })

// arr2.forEach((valInArr) => {  // using arrow function
//     console.log(valInArr)
// })


// function addOne(val) {
//     val++;
//     console.log(val)
// }
// arr2.forEach(addOne)  // Reference dena hai function ka execution nahi karna!

// arr2.forEach((val, index, arr2) => {
//     console.log(val, index, arr2)
// })

//[ {}, {}, {} ]
// IMPORTANT
const myCode = [
    {
        language: "javascript",
        file: "js"
    },
    {
        language: "java",
        file: "java",
    },
    {
        language: "python",
        file: "py"
    }
]
myCode.forEach((item) => {
    console.log(item.file)
})
