// node 01_basics/03_conversion.js
// let score = null

// console.log(typeof score) 
// console.log(typeof(score)) // as a method

// let valueInNumber = Number(score) // converting value to number using Number()
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//  TO number
// "33" -> 33
// "33abc" -> NaN NotANumber typeof number
// true -> 1
// undefined -> undefined
// null -> 0

// let isLoggedIn = "rishi"
//  To BOOLEAN
//  0 -> false, 1 -> true
//  "" -> false, "rishi" -> true

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)
// generally browser give you strings

// ********* OPERATIONS ********* 

let str1 = "hello"
let str2 = " Rishi"

let str3 = str1 + str2
// console.log(str1 + str2)

// console.log("1" + 2) // = 12
// console.log(1 + "2") // = 12
// console.log("1" + 2 + 2) // = 122 and not 14
// BUT
// console.log(1 + 2 + "2") // = 32 and not 122

// whichever is first, gets convertef to it

// console.log(+true);
// console.log(+"");

// let num1, num2, num3 NOT READABLE
// num1 = num2 = num3 = 2+2
// console.table([num1,num2,num3])

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
// prefix and postfil js mdn
