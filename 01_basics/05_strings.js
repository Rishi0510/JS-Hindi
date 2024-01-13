// node 01_basics/05_strings.js
// Declaration of strings
const name = "Rishi"
const repoCount = 20
// const gameName = new String('RishiHc')

// console.log(name + repoCount + "Value") // not a good practice

//  ** USE BACKTICKS **
//  String interpolation :
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// String is not array, its a object, key-value pair.
const gameName = new String('Rishi-Hc')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2))
console.log(gameName.indexOf('s'))
const newString = gameName.substring(1,6)//[start,end)
// console.log(newString)

const anotherString = gameName.slice(2,4)
// console.log(anotherString)

const newS = "    Rishi     "
// console.log(newS)
// console.log(newS.trim()) // trim whitespace ko hata deta hai start aur end se

// REPLACE
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-')) // (what to replace, to which to replace)

console.log(url.includes('hitesh'))

console.log(gameName.split('-')) 
// split(seperator,limit)