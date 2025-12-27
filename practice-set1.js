// let x = 10;
// const y = "10";
// console.log(x == y);
// console.log(x === y);


// var a = 10;

// if (true) {
//   var a = 20;
// }

// console.log(a);


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

// function checkNumberType(num){
//   if(num===0) return "number is Zero";
//   return num>0? "number is Positive" : "number is Negative"
// }
// console.log(checkNumberType(5));
// console.log(checkNumberType(NaN));
// console.log(checkNumberType(-5));



//ternary operator ? : to decide Even/Odd.

// function printEvenNumber(num){console.log(num % 2===0? 'even': 'odd');
// }

// printEvenNumber(5)
// printEvenNumber(6)
// printEvenNumber(2)
// printEvenNumber(undefined)//undefined becomes NaN,NaN === 0 → false → "Odd"
// printEvenNumber(NaN)//nan stay nan ,NaN === 0 → false → "Odd"
// printEvenNumber(null)//null becomes 0, 0 % 2 === 0 → true → "Even"


// function printNumberSign(num){
//   if(num ===0)return 'zero';
//   return num>0?"number is positive":"number is Negative"
// }
// console.log(printNumberSign(5));


// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr.length);
// console.log(arr[0])
// console.log(arr[4])


// arr.push(6,7,8)
// console.log(arr)
// arr.pop()
// console.log(arr)
// console.log(arr.includes(6))
// console.log(arr.join())
// arr.slice()


// let aar1 =[1,2,3,]
// let aar2 =[4,5,6]
// //concating with the operator  + ,+ ever merges arrays, it always converts them to strings if one operand is an array.
// // let arr3 =aar1 + "," + aar2
// // console.log(arr3)
// //concating with the concat operator
// let aar3 = aar1.concat(aar2);
// console.log(aar3)

