//1
// let x = 10;
// const y = "10";
// console.log(x == y);
// console.log(x === y);

const { set } = require("mongoose")

//2
// var a = 10;

// if (true) {
//   var a = 20;
// }

// console.log(a);

//3
//even and odd
//i can check even and odd number with the operater %, / 
// function isEvenOrOdd(num){
//   if(num/2==0){
//     return 'even';
//   }
//   else{
//     return'odd';
//   }
// }
// console.log(isEvenOrOdd(-5));
//4
//checking number is negative and positive 
// function checkNumberType(num){
//   if(num>0){
//     return 'number is Positive'
//   }else if(num<0){
//     return'number is Negative'
//   }else if (num ===0){
//     return 'number is Zero'
//   }
// }
// console.log(checkNumberType(5));
// console.log(checkNumberType(-2));
// console.log(checkNumberType(0));
//5
// function checkNumberType(num){
//   if(num===0) return "number is Zero";
//   return num>0? "number is Positive" : "number is Negative"
// }
// console.log(checkNumberType(5));
// console.log(checkNumberType(NaN));
// console.log(checkNumberType(-5));



//ternary operator ? : to decide Even/Odd.
//6
// function printEvenNumber(num){console.log(num % 2===0? 'even': 'odd');
// }

// printEvenNumber(5)
// printEvenNumber(6)
// printEvenNumber(2)
// printEvenNumber(undefined)//undefined becomes NaN,NaN === 0 → false → "Odd"
// printEvenNumber(NaN)//nan stay nan ,NaN === 0 → false → "Odd"
// printEvenNumber(null)//null becomes 0, 0 % 2 === 0 → true → "Even"

//7
// function printNumberSign(num){
//   if(num ===0)return 'zero';
//   return num>0?"number is positive":"number is Negative"
// }
// console.log(printNumberSign(5));

//8
// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr.length);
// console.log(arr[0])
// console.log(arr[4])

//9
// arr.push(6,7,8)
// console.log(arr)
// arr.pop()
// console.log(arr)
// console.log(arr.includes(6))
// console.log(arr.join())
// arr.slice()

//10
// let aar1 =[1,2,3,]
// let aar2 =[4,5,6]
// //concating with the operator  + ,+ ever merges arrays, it always converts them to strings if one operand is an array.
// // let arr3 =aar1 + "," + aar2
// // console.log(arr3)
// //concating with the concat operator
// let aar3 = aar1.concat(aar2);
// console.log(aar3)

//11
/*
Method,Where it acts,Action
.push(),End,Adds
.pop(),End,Removes
.unshift(),Start,Adds
.shift(),Start,Removes
*/

// let  myColor = ["red","blue","green"]

// console.log(myColor)

// myColor[2]="yellow";//Modify: Change "green" to "yellow" using its index.
// console.log(myColor)
// myColor.push("purple")
// console.log(myColor);
// myColor.unshift("white")
// console.log(myColor)
// let removeColor =myColor.pop()
// console.log("I just Removed :",removeColor)

// console.log(myColor)
// myColor.shift()
// console.log(myColor)

//12
// let  myColor = ["red","blue","green"]
// console.log(myColor.indexOf("blue"))
// console.log(myColor.includes("blue"))
// console.log(myColor.join("-"))
// console.log(myColor)

// let number = [10,20,30,40,50]

// let part =number.slice(0,4)

// console.log(part)
// console.log(number)
// number.splice(0,2)
// console.log(number)


//13
// let users =[{
// name:"megha",
// id:1,
// }]

// console.log(users)
// console.log(users.name)

// users.push({name:"ankit",id:2})
// console.log(users)
// console.log(users.length)


//14

// let scores= [10,20,30,40,50]
// let lastItem =scores.length-1
// console.log(lastItem)


//15
// let user =[{name:"megha",id:1},{name:"ankit",id:2},{name:"priya",id:3},{name:"geeta",id:4}]

// // let lastItem = user.length-1
// // console.log(user[lastItem])

// let lastItem = user.length-2
// console.log(user[lastItem].id)


/*
The .at() Method (The Math-Free Way)
You asked earlier "why -1 in length?". It can be annoying to write .length - 1 every time. JavaScript recently added a cleaner way called .at().

The Logic:

.at(0) gets the first item.

.at(-1) gets the last item.

.at(-2) gets the second-to-last item.*/

//16
// let set1 = [{name: "A", id: 1}, {name: "B", id: 2}]
// let set2 = [{name: "C", id: 3}, {name: "D", id: 4}]

// let allSet= [...set1,...set2]
// console.log(allSet)
// console.log(allSet.length)
// console.log(allSet.at(0))
// console.log(allSet.at(-1))
// console.log(allSet.at(-3))

//17
// let set1 = [{name: "A", id: 1}, {name: "B", id: 2}]
// let set2 = [{name: "C", id: 3}, {name: "D", id: 4}]

// let allSet= [...set1,...set2]
// //user is a parameter its not a variable
// let foundUser = allSet.find((user) => user.id===4)
// console.log(foundUser.name)


//18
// let set1 = [{name: "A", id: 1}, {name: "B", id: 2}]
// let set2 = [{name: "C", id: 3}, {name: "D", id: 4}]

// let allSet= [...set1,...set2]

// let highIdUsers = allSet.filter((user) =>user.id >2)
// // console.log(highIdUsers)
// // console.log(highIdUsers.length)


// let specialUser= allSet.find((user) => user.name==="B")
// console.log(specialUser)
// specialUser.id=99;
// console.log(specialUser)


//19
// let set1 = [{name: "A", id: 1}, {name: "B", id: 2}]
// let set2 = [{name: "C", id: 3}, {name: "D", id: 4}]

// let allSet= [...set1,...set2]

// let searchName ="D"
// let founder = allSet.find((user) => user.name===searchName)

// if(founder){
//   console.log('user found ID is :'+ founder.id)
// }else{
//   console.log('user not found :')
// }

//20

// let set1 = [{name: "A", id: 1}, {name: "B", id: 2}]
// let set2 = [{name: "C", id: 3}, {name: "D", id: 4}]

// let allSet= [...set1,...set2]
// // let lobelLis1 = allSet.map((u) => "user: " + u.id)
// let lobelLis1 = allSet.map((user) => "user: " + user.name)

// let lobelList = allSet.map((u) => "user: " +u.id)
// console.log(lobelList)
// console.log(lobelLis1)



//****************************************Function and Objects ***********//

//21

// let myUser =[{ name: "Priya", age: 25, city: "Delhi" },
//   { name: "ankit", age: 18, city: "Delhi" },
//   { name: "aruna", age: 15, city: "Delhi" },]
// function checkEligibility({name, age}){

//   if(age>18){
//     console.log(name+ "eligible")
    
//   }else{
//     console.log(name+"not eligible")
    
//   }
// }
// checkEligibility(myUser)


//22

// let student =[
//   {name: "megha", score:45},
//   {name: "priya",score:85},
//   {name: "geeta",score:90},
// ]

// function evaluateStudent({name,score}){
//   if(score>=50){
//     return `${name} passed`
//   }else{
//     return `${name} Failed`
//   }}

//   let result = student.map((user) => evaluateStudent(user));
//   console.log(result)
  

//23

// let student =[
//   {name: "megha", score:45},
//   {name: "priya",score:85},
//   {name: "geeta",score:90},
// ]

// const evaluateStudent=({name , score})=> {
//   if(score>=50){
//     return `${name} passed`
//   }else{
//     return `${name} failed`
//   }
// }
//   let result = student.map((user) => evaluateStudent(user));
//   console.log(result)