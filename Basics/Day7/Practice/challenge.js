// 1 
let cartValue = 500 ;
let disCountedCartValue;
if(cartValue < 50 ){
    // console.log('no discount is applied')
}else if (cartValue <100){
    disCountedCartValue = cartValue - cartValue * (10/100)
    // console.log('10 percent discount is applied:', disCountedCartValue)
}else if (cartValue <7000 ){
    disCountedCartValue =cartValue- cartValue *(20/100)
    // console.log('20 percent dicount is applied',disCountedCartValue)
}else{
    // console.log('none of dicount applied')
}


//to fixed (toFixed())

let result = 10/3
// console.log(result.toFixed(2))

let a =4 , b=3, c=6
//string
// console.log(`value of a is ${a} value of b is ${b} value of c is ${c}` )


// challenge 

let userSubscription = true 
let subscription = 'premium'

if(userSubscription ){
    if(subscription === 'premium'){
        console.log('Access to all content')
    }else if( subscription === 'standard'){
        console.log('Access to limited content')

    }
}else{
    console.log('please subscribe to access content ')
}