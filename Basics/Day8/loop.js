// core loops for loop , while loop, do while loop 
// for in loop for each  
//loop in js are a way to repeat a block of code multiple times

//example of for loop
for (let i = 1; i <= 10; i++) {
    // console.log('class')
    //  console.log(i)
}
//for (initialization (let i = 0) , condition(i <= 10), iterator (i++))
// while loop 
// let i = 1
// while (i<=10) {
//     console.log('megha')
//      i++;
// }

// do while loop 
let a = 100
do {
    // console.log(a)
    // a++
} while (a<=5);

//forin or forof  loop 
//inside for-of loop its give value, its work on string  and for-in loop give key and its work on object or array 



let str = "megha sharma"
//first we have to store variable  (ch) nd print that 
//forof loop
for (const ch of str) {
    console.log(ch)
}

// forin loop inside for in we recive index Like 0,1,2,3.....
for (const ch in str) {
    console.log(ch)
}
// for loop
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}