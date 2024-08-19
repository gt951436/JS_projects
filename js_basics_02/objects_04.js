// const obj = new Object()  // empty object-->{} -->singleton object
const originalObj = {} // non-singleton object
originalObj.id = "123abc"
originalObj.name = "sam"
originalObj.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Garv",
            lastName: "Tyagi"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname?.userFullName?.firstName)

// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "a", 4: "b" }
// const obj3 = { 5: "a", 6: "b" }

// COMBINING THE OBJECTS
// const target = Object.assign({}, obj1, obj2, obj3)

// const target = { ...obj1, ...obj2, ...obj3 }   //SPREAD METHOD

// console.log(target)

// Array of objects --> multiple objects in an array
const arrObj = [
    {
        name: "GT",
        id: "gt123",
        email: "gt@gmail.com"
    },
    {
        name: "LC",
        id: "lc234",
        email: "lc@gmail.com"
    }
]
// console.log(arrObj[0].email) // accessing the elements in array of objects
// console.log(arrObj)

// console.log(originalObj)
// KEYS OUTPUT CHAHIYE --> Object.keys()
// KEYS KI VALUES CHHIYE --> Object.values()

// RETURNS ARRAY OF STRINGS(KEYS/VALUES AS STRINGS)
// console.log(Object.keys(originalObj))  
// console.log(Object.values(originalObj))
// console.log(Object.entries(originalObj)) // ENTRIES-->[KEY,VAL] PAIR KA ARRAY

//AGAR ARRAY MEIN CHECK KARNA HOTA HAI KI KOI PROPERTY HAI YA NAHI!?
// console.log(originalObj.hasOwnProperty('isLoggedIn'))

const course = {
    courseName: "JS mastery",
    price: 999,
    courseInstructor: "GT"
}
/*Accessing properties of objects using "." operator everytime we access different properties
is tiresome,so we use Object De-structuring technique (below)*/

// const { courseName:cname, price } = course  //de-structuring
// console.log({cname, price }) // courseName renamed as cname --> easy to use

//  JSON OBJECT  --> key:string , value:string

// {
//     "name": "gt",
//     "courseName": "JS MASTERY",
//     "price": "999"
// }

//MULTIPLE APIs
// [
//     {},
//     {},
//     {}
// ]
