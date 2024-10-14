// Exercise 1

let name = "Paul";
let city = "Dierhagen";
let favNumber = "0";

console.log("My name is", name);
console.log("I live in", city);
console.log("My favourite number is", favNumber);

// Exercise 2

let string = "Java is different than JavaScript";

console.log(string.length);
console.log(string.toUpperCase());
console.log(string.slice(23, 33));
console.log(string.includes("JavaScript"));

// Exercise 3

let myNumber = "4";

if(myNumber > 0){
    console.log(myNumber, "is a positive Number");
}

if(myNumber < 0){
    console.log(myNumber, "is a negative Number");
}

// Exercise 4

if(myNumber % 2 == 0) {
    console.log(myNumber, "is even.");
}

else {
    console.log(myNumber, "is odd.");
}

// Exercise 5

let num1 = "1";
let num2 = "2";
let num3 = "3";

console.log(Math.max(num1, num2, num3), "is the largest number.");

// Exercise 6

let myGrade = 100

if(myGrade > 89 && myGrade <= 100){
    console.log("A")
} else if(myGrade > 79 && myGrade < 90){
    console.log("B")
}else if(myGrade > 69 && myGrade < 80){
    console.log("C")
}else if(myGrade > 59 && myGrade < 70){
    console.log("D")
}else{
    console.log("F")
}

// Exercise 7

for(let i=1; i<11; i++){
    console.log(myNumber * i)
}

// Exercise 8

let myOriginalNumber = 0

if(myOriginalNumber === 0 || myOriginalNumber === 1){
    myOriginalNumber=1
}
for (var i = myOriginalNumber - 1; i >= 1; i--) {
myOriginalNumber *= i;}
console.log(myOriginalNumber)

// Exercise 9

for( let u=1; u<51; u++){
    if(u%15==0){
        console.log("FizzBuzz")
    }else if (u%5==0) {
        console.log("Buzz")
    }else if (u%3==0) {
        console.log("Fizz")
    } else{
        console.log(u)
    }
}