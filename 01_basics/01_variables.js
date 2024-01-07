const accountId = 144553
let accountEmail = "rishi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // not a good way though

let accountState;
console.log(accountCity)

// INVESTIGATION :

//(const changing not allowed) accountId = 2 const ko change nahi kar sakte node mana kardeta hai.
// console.log(accountId);

// diff between var let ?
/* Prefer not to use VAR because of issue in block scope and functional scope */

accountEmail = "rrishi596@gmail.com"
accountPassword = "54321"
accountCity = "Raipur"

// bar bar console na likhna pade islie
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
