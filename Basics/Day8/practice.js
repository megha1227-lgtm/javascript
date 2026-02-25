// 1calculate sum of first 'n' numbers
// let n = 10 
// let sum = 0
// for (let i = 1; i <= n; i++) {
//     // sum +=i
//     //   console.log(`sum : ${sum}`)
// }

//2calculate  the sum of number  from m to n 
// let m = 10 
// let o = 20 
// let sum1 = 0
// for (let i = m; i <=o; i++) {
//     sum1 +=i
//     // console.log(sum1)
    
// } 


// 3print all odd number  form 0 to n

// let n =20 
// for (let i  = 0; i  <=n; i++) {
//     if (i%2!==0){
//         console.log(i)
//     }
    
// }


//4create a "Number Knock " game (ask the user to keep guessing the number  until the user enters correct  guess)
// let userinput = null
// let computerguess = 5;
// let attempt = 3
// while (userinput !== computerguess) {
//   userinput = Number(prompt('enter number'))
//     if(isNaN(userinput)){
//     alert('not a vaild number ')
// }else if (userinput < computerguess){
//     alert('your guess number is too low to the computer number')
// }else if (userinput >computerguess){
//     alert('number is too high')
// }else{
//     alert('you guess is correct')
//     break
// }

// }


//5simple create a password checker (fiked attempt)

// let correctPassword = "megha";
// let attempt = 5;
// let userinput;

// do {
//     userinput = prompt("Enter Password:");

//     if (userinput === correctPassword) {
//         console.log(" Success");
//         break;  
//     } else {
//         attempt--;
//         console.log(" Wrong attempt, attempts left:", attempt);
//     }

// } while (attempt > 0);

// if (attempt === 0) {
//     console.log(" Account locked. No attempts left.");
// }


//6 create  to program  to find the factional of 'n'

// let n = 20
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     result= result *i
//     console.log(result)
    
// }
//20 *19 *18*17*16*15*14*13*12*11*10*9*8*7*6*5*4*3*2*1