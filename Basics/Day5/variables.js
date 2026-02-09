// let name; //Declaration of variable 

// name = ' megha sharma ' // Initialization the value of variable 

// console.log(name); // Use of variable 

// Declaration + Initialization

// let nm = "megha sharma"
// console.log(nm);


// // js is a dynamically typed language & forgiving language in this you don't need to specifythe type of a variable ,even variable dynamically changed its type respective to the data assigned in

// let a ;
// a = 'megha'

// console.log(typeof a )
// console.log(('a' + a))



//inside var we can re declared the values inside var variable and its a global scope
// inside let re can't redeclared the variable but  we can re declared the variable values and its block scope
//inside  const we can't chnage or update variable name and its values 


// 30 practice sets for variable part 15 easy 10 medium 5 hard 
//20 theory question as well 

//1print all three variables using console.log.

// let name = 'Megha Sharma'
// let age = 23
// let isStudent = false 


// console.log(name)
// console.log(age)
// console.log(isStudent)


//2 Create a third variable sum that stores the sum of a and b

// let a = 10 
// let b = 20
// let sum = a +b
// console.log(sum)

//3 Create a variable price with value 150.

// const price = 150 
// const discount = 20

// const finalPrice = price - discount ;
// console.log(finalPrice)

//4 Create a variable num with value 5.

//Increase its value by 1 using:

// let  num = 5 
// num++
// console.log(num)

//5 Create a variable x with value 10.

// Then:

// Multiply x by 2

// let x = 10 
// x = x*2
// console.log(x)

//6Calculate the area of a rectangle and store it in a variable called area.

// let length = 10 
// let width = 5
// let area = length *width

// console.log(area)


//7 Create a variable marks with value 80

// let marks = 80

// marks = marks + 10 

// console.log(marks)

//8 Swap the values of a and b

// let a = 5
// let b = 3
// let c = a
// a= b
// b=c
// console.log(a)
// console.log(b)


//9 Create a variable count with value 1.

// Increase its value by 5

// let  count = 1

// count = count + 5
// console.log(count)


//10 Create a variable temperature with value 25.

// let temperature = 25 
//  let F = ( temperature * 9/5)+32
//  console.log( F)


// 11 Create a variable salary with value 10000

// let salary = 10000

// salary = salary + 2000

// console.log(salary)


//12 Create a variable score with value 50

// let score = 50 
// score = score - 15
// console.log(score)

//13 Calculate the area of a triangle using the formula:
// let base = 10 
// let height = 5
// let area = (base *height)/2
// console.log(area)


// 14 Create a variable num with value 7.

// let num = 7 
// num = num*3
// console.log(num)


//15 Create a variable value with value 100.

// let value = 100

// value = value/4
// console.log(value)


/// MEDIUM Questions 

 //1
// function variable(numOne, numTwo) {
//     if (numOne> numTwo) {
//         return  'num 1 is greater than num 2'
        
//     }else{
//         return ' num 2 is greater than num 1'
//     }
    
// }

// console.log(variable(10,8))


//2

// let number = 23
// if( number % 2===0){
//     console.log('number is even')

// }else{
//     console.log('number is odd')
// }

//3 

// let a = 10 
// let b= 20 
// let c = 15

// if(a >b && a>c){
//     console.log('a is greater ')

// }else if ( b>a&&b>c){
//     console.log('b is greater ')

// }else{
//     console.log('c is greater')
// }

//4 Create a variable marks with any value (0–100).

// Assign grades based on the value:


// let marks = 70 ;

// if (marks>=90 && marks<=100) {
//     console.log('A');
    
// }else if (marks>=70 && marks<=80){
//     console.log('B')
// }else if (marks>=50 && marks<=60){
//     console.log('B')
// }else{
//     console.log('F')
// }

//5 Check if the year is a leap year using if-else and print:
// let year = 2026
// if (year%4===0){
//     console.log('its a leap year')

// }else if (year%100===0){
//     console.log('its not a leap year')
// }else if (year % 400 ===0 ){
//     console.log('its a leap year')
// }else {
//     console.log('its not a leap year')
// }


//6 Check if the number is positive, negative, or zero and print:

// let num = 4

// if (num < 0) {
//     console.log('is a negative number')
// } else if (num > 0){
//     console.log(' its a positive number')
// }else{
//     console.log('its a equal number ')
// }


//7 Check if the number is divisible by both 3 and 5.

// let num =15
// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Divisible by both 3 and 5");}
// else if (num % 3 ===0) {
//     console.log('number is divided by 3')
// } else if (num % 5===0) {
//     console.log('num is divideb by 5')
// }else{
//     console.log('not divisible by 3 or 5')
// }

//8 swap their values without using a third variable
// let num1 = 10;
// let num2 = 20;

// num1 = num1 + num2; 
// num2 = num1 - num2; 
// num1 = num1 - num2; 

// console.log("num1 =", num1);
// console.log("num2 =", num2);


//9 Print all numbers from 1 to n using a for loop.

// let n = 5

// for (let i = 1; i <=5; i++) {
//     console.log(i)
    
// }


//10 Create a variable num. Print all multiples of 3 from 1 to num using a loop.

// let num =15

// for (let i = 1; i <= num; i++) {
//    if(i%3===0){
//     console.log(i)
//    }
    
// }


/// 5 HARD questions 

//1 5 table 


// let n =5
// for (let i = 1; i <= 10; i++) {
//    console.log(`${n}* ${i}*${n*i}`)
// }

//2

// let n =5
// let f = 1
// for (let i = 1; i <= n; i++) {
//     f*=1
    
// }
