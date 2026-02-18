//operations questions

//1 
let amount = 1600
let userIsLogged = true
let blocked = false

let result1 = amount>=1500 && userIsLogged=== true && !(blocked)

// console.log(result1)


//2

let balance = 50000
let withdrawAMount = 12000
let isActive = true
let dailyLimit = 20000


let result2 = withdrawAMount <=balance && isActive && withdrawAMount <= dailyLimit
// console.log(result2)


//3

let distance = 15
let farePerKm = 14
let totalFare = distance *farePerKm
// console.log(totalFare)
let walletBalance = 300

let result3 = distance>2 && farePerKm>=12 && walletBalance>=totalFare;
// console.log(result3)

//4

// // let a=1,b=3 ,c=5
// if(a ===b && b===c ){
//     // console.log('all are equal')
// }else if ( a >b && a>c ){
//     // console.log(`largest number is : ${a} `)
// }else if (b>a && b>c  ){
//     // console.log(`largest number is : ${b}`)
// }else if (c>a && c>b ){
//     // console.log(`largest number is :${c}`)
// }


//5 
let leapYear = 1990;
if(leapYear % 400 ===0){
    // console.log('leap year')
}else if (leapYear % 100===0 ){
    // console.log('not leap year')
}else if (leapYear % 4===0){
    // console.log('leap year')
}else{
    // console.log('not a leap year ')
}

//6 
let salary = 2000000
let tax = 0 ;
let finalSalary = 0 ;

if(salary<= 250000){
    tax = 0;
  
}else if (salary <= 500000){
    tax = salary * (5/100)
   
}else if (salary <= 1000000){
    tax = salary * (20/100)
    
}else{
    tax = salary *(30/100)
}
finalSalary= salary - tax
// console.log('tax amount ', tax)
// console.log('final salary', finalSalary)


// 7

let username = "admin"
let password = "1234"
let isAdmin = false
if (username=== "admin" && password === "1234" && isAdmin ){
    // console.log('fullaccess')
}else if(username === "admin" && password === "1234" && !(isAdmin)){
    // console.log('limited access')
}else if (username === "admin" && password !== "1234"){
    // console.log('incorrect password')
}else{
    // console.log("access denied")
}

//8

let num= -5
if(num===0){
    console.log('zero')
}else if (num > 0){
    if(num %2 ===0 ){
        console.log('positive even number')
    }else if (num %2 !==0){
        console.log('positive odd number')
    }
}else{
   if(num< 0 && num % 2 ===0){
    // console.log('num is negative even')
   }else if( num <0 && num % 2!==0){
    // console.log('num is negative odd')
   }
}


//9
// let a= 2 , b=2 , c=3;
// if (a+b > c && a +c >b && b+c >a) {

//     if (a===b && b===c){
//         console.log('equilateral')
//     }
//     else if (a===b || b===c || a===c){
//         console.log('isosceles')
//     }
//     else{
//         console.log('scalene')
//     }

// } else {
//     console.log('not valid')
// }


// 10 

let score = 20 ;
if (score<0 || score>100 ){
   console.log('invalid score ')
}else if (score >= 90){
    console.log("A")
}else if (score >= 80){
    console.log("B")
}else if (score >= 70){
    console.log("C")
}else if (score >= 60){
    console.log("d")
}else {
    // console.log('F')
}

//11
let age = 20;
let hasLicense = true
let hasHelmet = true

if (age < 18){
    console.log('not eligible to dirve')
}else if (!hasLicense ){
    console.log('apply for license first')
}else if (!hasHelmet ){
    console.log('wear helmet')
}else {
    // console.log('allowed to drie')
}


