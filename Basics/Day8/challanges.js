//print all even number 0-100

for (let i = 0; i <=100; i++) {
    if(i%2===0){ //even
        console.log(i)
    }else if (i%2!==0){ //odd
        console.log(i)
    }
}

//2calculate how many  vowels and consonents are in a given string using for of loop 


let string = "hello"
let vowelCount = 0 ;
let consonentsCount = 0;
for (const ch of string) {
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U' ){
        vowelCount++;
    }else {
        consonentsCount ++
    }
}
console.log(`vowel count :${vowelCount}, consonents count ${consonentsCount}`)