// different types of conditional statements
//1 if statements
//2 if..else statement
//3 if..else if...else (also called else -if ladder )
//4 nested if statement
//5 switch statement
//6 ternary operator(?:)(short form)

let age = 15;
if (age >= 18) {
  console.log("you can drive");
} else {
  console.log("you can`t drive ");
}

//3rd conditions
let grade = 33;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("D");
}
// console.log(grade)

//In conditional if and else we use

let productInStock = 4;

if (productInStock <= 0) {
  console.log("product is out of stock");
} else {
  console.log("Product in Stock");
}
// console.log(productInStock)

let weather = "rainy ";

if (weather === "rainy") {
  console.log("take umbrealla");
} else {
  console.log("enjoy the sun shine");
}
// console.log(weather)

//nested If statements

let userName = "";
let passWord = "";
let dbUserName = "mkl";
let dbPassWord = "1334";

if (userName === dbUserName && passWord === dbPassWord) {
  console.log("Successfully logged in");
} else {
  console.log("Invalid username or password");
}

//swtich case
//inside stich case if we  don’t use break, JavaScript switch will fall through and execute all cases after the matched one.
let color = "yellow";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "yellow":
    console.log("wait");
    break;
  case "green":
    console.log("go");
    break;

  default:
    console.log("invalid color");
    break;
}
