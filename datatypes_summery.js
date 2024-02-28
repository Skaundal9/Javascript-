//Primitive(call by value)
// 7 types: String,Number, Boolean, null, undefined, Symbol,BigInt

const oustiseTemp=null
let userEmail;

//Symbol
const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId);

//BigInt
//const bigNumber=22553625656n

// Non-Primitive(call by reference)
// Array, Objects,Functions

//Array
const heros=["shaktiman","naagraj","doga"];

//Object
let myObj={
    name:"Shubham",
    age:22,
}

//function
const myFunction = function(){
    // console.log("Hello Shubham")
}
// console.log(typeof myFunction)

// ++++++++++++++++++++++++++++++

// Stack memory(Primitive), Heap Memory(Non-Primitive)

let myName="Shubham"
let anotherName = myName
anotherName="Sachin"
// console.log(myName)
// console.log(anotherName)

let userOne={
    email: "Shubham@123.com",
    upi: "shubham@ybl"
}
let userTwo = userOne
userTwo.email="Sachin@123.com"
console.log(userOne.email)
console.log(userTwo.email)