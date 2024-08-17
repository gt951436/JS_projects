const arr1 = [0, 1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]
// arr1.push(arr2)
// console.log(arr1)  // moves the entire arr2 into arr1 but we wanted to merge arr1 and arr2
// console.log(arr1[5][3])   //8
//----------------------------------------------------------------------------------------
// const finalArr =arr1.concat(arr2)  // returns new array without modifying arr1 or arr2
// console.log(finalArr)

// const newArr = [...arr1,...arr2]  // SPREAD method -->to join the arrays
// console.log(newArr)
//--------------------------------------------------------------------------------------
// FLAT method --> returns new array with the subarray elements concatenated into it upto specified depth.

// const Arr = [0, 1, 2, [3, 4, 5], 6, 7, [8, [9, 10]]]
// const ans=Arr.flat(Infinity)   // depth-->{1,2,3,....,Infinity} in Arr.flat(2)
// console.log(ans)
//------------------------------------------------------------------
/*when we scrap the data from web, it can be in any form either list,arrays,JSON,objects,node list,strings,etc,
so if we want the data in array form,we use some array methods */

// console.log(Array.isArray("Garv-Tyagi"))  //False
// console.log(Array.from("Garv-Tyagi"))    // creates an array from iterables
// console.log(Array.from({ name: "GarvTyagi" }))  //array from object --> Interesting case(?)--> returns []
//-----------------------------------------------------------------------------------------
let a1 = 100
let a2 = 200
let a3 = 300
console.log(Array.of(a1,a2,a3))  // returns a new array from [a1,a2,a3]-->set of elements
