//7 bitwise operators
// bitwise operators work on binary numbers and perform bit-level operations
// they are used to manipulate individual bits of data
// operators include AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>), and unsigned right shift (>>>)

// // example of bitwise AND
let a = 4;  // binary: 101
let b = 7;  // binary: 011
let result = a & b;  // binary: 001, decimal: 1
// console.log(result);


//example of bitwise OR
let c = 26;  // binary: 101
let d = 15; // 
let result2 = c | d;  // binary: 111, decimal: 7
// console.log(result2);


//example of bitwise Not
//msb (most significant bit) is 0 for positive numbers and 1 for negative numbers
//2's complement is used to represent negative numbers in binary , 2's complement is obtained by adding 1 to the 1's complement of a number
//1's complement is obtained by inverting all bits of a number

// formula for bitwise NOT : ~n = -(n+1)

let e = 3;  // binary: 101
let result3 = ~e;
// console.log(result3);