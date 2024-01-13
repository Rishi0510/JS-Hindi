// DATES is an OBJECT
// node 01_basics/07_dates.js
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,19,13,01) // month 0 se shuru hote hain js me
// console.log(myCreatedDate.toLocaleString());
const myD = new Date("01-14-2023") 
// console.log(myD.toString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myD.getTime()) // milisecond me convert krdeta hia..to compare while making clones of airbnb etc

// converting to seconds
console.log(Date.now()) // milisconds me
console.log(Math.floor(Date.now()/1000)); // second me