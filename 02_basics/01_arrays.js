// Arrays shrre shallow copies(Reference share), 0 based indexing

const myArr = [1,2,3,4,5]
const heroes = ["Rishi","BB"]

const myArr2 = new Array(1,2,4,5)
// console.log(heroes[0]);

// Array methods :

myArr.push(6)
// console.log(myArr);
myArr.pop()
// console.log(myArr)
myArr.unshift(9);
// console.log(myArr)

// Some more methods
// includes(target) says yes or no
// indexOf(x) gives the index
// console.log(myArr.indexOf(10)) if not then gives -1
// join
const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr);

//  SLICE, SPLICE
// 1. SLICE ME [A,B) BUT SPLICE ME [A,B]
// 2. SPLICE ME WO PORTION HI NIKAL JATA HAI ORIGINAL ARRAY SE..

console.log("SLICE:")
console.log("A ", myArr)
const myn = myArr.slice(1,3);
console.log(myn);
console.log("B ", myArr)

// *****

console.log("SPLICE")
console.log("A", myArr)
const myn2 = myArr.splice(1,3);
console.log(myn2)
console.log("B ", myArr)