// const coding = ["js", "ruby", "java", "cpp", "py"]

// Return type of forEach() loop is undefined(none)

// const val = coding.forEach((item) => {
//     console.log(item)
//     return item
// })
// console.log(val) // returns undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// FILTER METHOD --> RETURNS AN ARRAY OF VALUES BASED ON CONDITION

// The filter() method of Array instances creates a shallow copy of a portion of a given array.

// const newNums = myNums.filter((num) => {
//     return (num > 4)
// })
//--------------------------------------------------
// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
//---------------------------------------------------
// function check(num) {
//     if (num > 4) {
//         return num
//     }
// }
// let newNums = myNums.filter(check) // only reference 

//-------------------------------------------------------------
// MAP METHOD 

// console.log(myNums.map((num) => num + 10))

// let newNums = myNums.map((num) => num + 10)
// console.log(newNums)

// function add_10(num) {
//     return num + 10
// }
// let newNums = myNums.map(add_10)
// console.log(newNums)

// let newNUms = (num)=> (num + 10)
// console.log(myNums.map(newNUms))

//------------------------------------------------------------------------------
// CHAINING OF METHODS --> maps with filters / maps with maps / etc

// const newNums = myNums
//     .map((num) => (num * 11))
//     .map((num) => { return (num + 3) })
//     .filter((num) => (num % 2 === 0))
// console.log(newNums)

//-----------------------------------------------------------------------------------------

// REDUCE METHOD

// const newNums = myNums.reduce(function (acc, curr){
//     // console.log(`acc : ${acc} , curr : ${curr}`);
//     acc = acc + curr;
//     return acc;
// }, 0)      // initial value = 0 for acc

// const newNums = myNums.reduce((acc, curr) => (acc + curr), 0) // initial value = 0 for acc
// console.log(newNums)

const shopCart = [
    {
        course: "JS course",
        price: 999
    },
    {
        course: "Marketing",
        price: 399
    },
    {
        course: "complete C course",
        price: 449
    },
    {
        course: "App Development",
        price: 1999
    }
]
// GIVE THE SUM OF PRICES OF ALL THE ITEMS IN THE SHOPPING CART

const totalSum = shopCart.reduce((tot, curr) => {
    if (curr.price < 500) {
        tot += curr.price;
    }
    return tot;
}, 0);
console.log(totalSum)
