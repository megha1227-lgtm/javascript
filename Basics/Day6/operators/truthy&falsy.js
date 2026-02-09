//8 truthy and falsy values in JavaScript

//Falsy values
//1. false
//2. 0
//3. -0
//4. 0n (BigInt zero)
//5. "" (empty string)
//6. null
//7. undefined
//8. NaN

//Truthy values
//1. true
//2. any non-zero number (positive or negative)
//3. any non-empty string
//4. any object (including arrays and functions)
//5. any BigInt that is not 0n
//6. Symbol


let result = 'ram' ? ' statement is 1 ' : ' statement is 2'
// console.log(result)

let userName = "";
let passWord ="";

let result2= userName && passWord ? 'login successful' : 'login failed'
console.log(result2)