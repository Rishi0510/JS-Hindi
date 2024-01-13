// node datatypes-summary.js
//  Primitive an Non Primitive

// Primitive : Given as a copy and not memory
//  7 types : String, Number(int), Boolean, null, undefined, Symbol, BigInt

//  Reference (Non Primitive)
// Arrays, Objects, Functions

// ** Javascript me kabhi variable ka datatype define nahi karte hain. let a = anything
/* Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time */

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null

const id1 = Symbol(2014)
// console.log(typeof(id))
const id2 = Symbol(2014)

// console.log(id1 === id2)
// two symbols with same values still will be different which serves the purpose of a Symbol. Making things unique.

// bigint - Last me n lagado

// Reference (NON PRIMITIVE) :
//  Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = 
{
    name : "Rishi",
    age : 21
}

// Inside curly braces are objects

// Functions ko bhi variable ki tarah treat kar sakte hain js me

// function(){} ab isko store krna hai
// const myFunction = function(){
    // console.log("Hello");
// }
// console.log(typeof myFunction) 
// = function or function Object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// STACK & HEAP(non primitive)
// stack ke andar define hota hai to copy milta hia, heap me reference

let myYoutubeName = "Rishi"
let anotherName = "myYoutubeName"
anotherName = "RishiAurCode"

// console.log(myYoutubeName)
// console.log(anotherName)

let userOne = {
    email:"user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne
userTwo.email = "userTwo@google.com"

// yahan userTwo ko direct reference mila heap se , userOne ka islie jab userTwo change kiye to wo memory me change kardiya..

console.log(userOne.email)
console.log(userTwo.email)


