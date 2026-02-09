//5 increment and decrement operators ++, -- (used to increase or decrease the value of a variable by 1) the increment operator ++ adds 1 to the variable, while the decrement operator -- subtracts 1 from the variable. these operators can be used in both prefix and postfix forms, where the prefix form (++x or --x) increments or decrements the variable before its value is used in an expression, and the postfix form (x++ or x--) increments or decrements the variable after its value is used in an expression.
// let a = 5
// //post increment
// console.log(a)
// console.log(a++)
// console.log(a)
// //pre increment
// console.log(++a) // a becomes 7 before this line, so the value of ++a is 7
// console.log(a) // a is now 7
// let b = 5
// ++b // b becomes 6 before this line, so the value of ++b is 6
// console.log(b)

// let a = 5
// let result = a++ + ++a + a-- + --a
// // result = 5 + 7 + 7 + 5 = 24
// console.log(result) // 24