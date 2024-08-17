//ARRAY --> copy operations-->creates Shallow Copies
/*SHALLOW COPIES--> which share the same reference,
i.e. changes made to the copy reflected in OG object.*/

const myArr = [0, 1, 2, 3, 4, 5]
// myArr.push(6)
// myArr.pop(3)
// myArr.unshift(9)   // adds the element in front by shifting other elements to the right
// myArr.shift()     // removes thr first element from the array

// console.log(myArr.indexOf(15))   // indexOf/includes,etc.


// const newArr = myArr.join()  // adds all the elements of the array in string with separator
// console.log(newArr)      
// console.log(typeof newArr)   // newArr-->string

//SLICE AND SPLICE
console.log(myArr)

const newArr = myArr.slice(1, 3)  // return copy of array elements from [1,3) without mutating OG array
console.log("After slice: ", newArr);
console.log("OG: ", myArr);

const newArr2 = myArr.splice(1, 3)  // return the array elements from [1,3] mutating the OG array
console.log("After splice: ", newArr2)
console.log("OG: ", myArr)


