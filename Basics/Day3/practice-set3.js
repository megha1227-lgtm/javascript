//1
// const num = [ 2,4,6,8]
// const initialValue = 0;

// const sum = num.reduce((acc , curr ) => acc + curr , initialValue);

// console.log(sum);

//2

// const num = [ 1,3,5,7]

// const initialValue = 0;

// const  product = num.reduce((acc , curr) =>  acc * curr, initialValue );

// console.log(product);


//3 

// const num = [10,20,30,40]

// const initialValue = 100;

// const  sun = num.reduce((acc , curr ) => acc+ curr , 100);

// console.log(sun);


// 4

// const num = [ 2 , 3 ,4]

// const initialValue = 0;

// const sum = num.reduce((acc , curr ) => acc + curr * curr  , initialValue);

// console.log(sum);

//5

// const num = [
//   { name: "apple", category: "fruit", price: 100 },
//   { name: "carrot", category: "vegetable", price: 50 },
//   { name: "banana", category: "fruit", price: 60 },
//   { name: "potato", category: "vegetable", price: 30 }
// ]
// const initialValue = {};
// const totalSum =num.reduce((acc , curr ) => {
//     if(!acc[curr.category]){
//         acc[curr.category] = 0;
//     }
// }, 0 )


// console.log(totalSum);


//filter 

//1 
// const  num = [1,2,3,4,5,6]

// const evenNum = num.filter((num) => num%2 ===0);

// console.log(evenNum);


//2 

// const str = ["apple", "bat", "ball"]
// const all = str.filter((num) => num.length <= 3 )
// console.log(all);
// console.log(str);


//3 

// const num =[10, 15, 20, 25, 30]

// const number = num.filter((num) => num >20);
// console.log(number);


// 4 

// const num = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 18 },
//   { name: "David", age: 16 }
// ]
// const year = num.filter((num) => num.age >= 18 )
// console.log(year);


//5 

// const wr = ["short", "medium", "lengthy", "tiny", "enormous"]

// const words = wr.filter ((num) => {
//     if ( num.length >= 5 && num.length <=7 ){
//         return num
//     }
// })
// console.log(words);
