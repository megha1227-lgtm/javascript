// 9 short-circuiting in javascript refers to the way logical operators (&& and ||) evaluate expressions. its allows you to control the flow and return values based on the truthiness without wirting full if statements
//|| operator returns the first truthy value it encounters or the last value if all are falsy
//&& operator returns the first falsy value it encounters or the last value if all are truthy


//example of || operator
console.log(""||undefined || "rohan" || null|| 0n)

//example of && operator

// if any operand is falsy, the result is falsy and the evaluation stops
console.log("rohan" && 23 && "megha" && true )


//example of nullish coalescing operator (??) which returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand
// with 0 or "" it will return the left-hand operand as they are not null or undefined
let result3 = null ?? "mkl";
console.log(result3)