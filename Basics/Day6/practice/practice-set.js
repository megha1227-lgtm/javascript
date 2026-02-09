let userAge = 19
let result = userAge >= 18 ? ' eligible for booking ' : ' not eligible for booking ';
// console.log(result)


let userName = ''
let password = ''
const result1 = userName && password ? ' login successful ' : ' login failed ';
// console.log(result)

//nested ternary operator 
let a =0.002
let b = 0.003
let c = 0.004
let result3 = a >b &&a >c ? 'a is greatest ':b>a && b>c ?'b is greatest':'c is greatesr';
// console.log(result)

// practice  of operators 
// ar
//1 Arithemetic operators
let num1 = 10 
let num2 = 30 
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)


//2

let d =15 
let e = 4 
// console.log(d%e)

//3

let num = 5
// console.log(num ** 2)
// console.log(num**3)

//4 
let price = 250 
let qty = 4 
let totalPrice = price * qty
// console.log(totalPrice)
let discount = totalPrice *(10/100)
// console.log(discount)

let finalPrice = totalPrice - discount
// console.log(finalPrice)


// 5

let principal = 1000
let rate = 6 
let time = 2 
let interest = (principal * rate * time ) / 100 
// console.log(interest)


// 6 

let basicSalary = 20000
let hra = basicSalary* (20/100)
// console.log(hra)
let da = basicSalary *(10/100)
// console.log(da)
let totalSalary = basicSalary +hra +da
// console.log(totalSalary)
let atx = totalSalary * (8/100)
// console.log(atx)
let netSalary = totalSalary - atx
// console.log(netSalary)

//1 assignment operators

let x = 10 
x += 5
// console.log(x)

//2
let y = 20 
y -=8 
// console.log(y)
y*=2
// console.log(y)

//3

let z = 50 
z /=5
// console.log(z)
z%=6
// console.log(z)

//4
let balance = 1000
balance +=500
let deductedBalance = balance * 20/100 
balance -=deductedBalance
// console.log(balance)


//5 

let score = 40 
score += 15
score*=2
score-=10
console.log(score)//


//6

let amount = 5000
let increase = amount *12/100
amount +=increase
let decrease = amount *7/100
amount-=decrease
console.log(amount)

//1 comparison operators

let f =15, g = 10

let result2 = f>g ? 'f is greater': 'g is greater'
// console.log(result2)

//2 

let h = 5
let l = "5"

// console.log(h == l)

//3
let m = 10 
let n = "10"
// console.log(m!==n)


//4 
let age = 18
// let check = age >= 18 ? ' true':'false'
// console.log(check)
// console.log(age>=18)

//5
let variable1 =25 
let variable2= 30 
// console.log( variable1<= variable2)

//6
let score1 =72
// console.log(score1 >=50 || score1 <80 )

//1 logical

let isLoggedIn = true
let harPermission = false
// console.log(isLoggedIn && harPermission)


//2 
let isWeekend = false
let isHoliday =true

// console.log(isWeekend || isHoliday)

//3

let isOnline = true
// console.log(!(isOnline))


//4
let age3 = 25 
let hasID = true 
// console.log(age3 >= 18 && hasID )

//5

let temperature = 35 
// console.log(temperature < 0 || temperature > 30 )

//6 
let username = 'admin'
let password1 = '1234'
let isBlocked = false

// console.log(username ==='admin' && password1 ==='1234' && !isBlocked)

//1 ternary operator

let num3 = 10 

let result4 = num3 %2 === 0 ? 'even ':'odd'
// console.log(result4)

//2

let age5 = 16 
let result5 = age5 >=18 ? 'eligible': 'not eligible'
// console.log(result5)


//3

let score5 = 45 
let result6 = score5 >=40 ? ' pass':'fail'
// console.log(result6)

//4 
let temp = 28
let result7 = temp >30 ?'hot':'normal'
// console.log(result7)

//5
let k =10 
let p =20 
let result8 = k>p ?k:p
// console.log(result8)

//6

let marks = 78 
let result9 = marks>= 75 ?'distinction': marks>=40 ?'pass':'fail'
console.log(result9)