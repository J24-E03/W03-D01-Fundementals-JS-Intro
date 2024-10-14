//Exercise 1
let myName = "Maryam"
let myCity = "Düsseldorf"
let myFavNumber = 8

console.log(`My name is ${myName}.`)
console.log(`I live in ${myCity}.`)
console.log(`My favorite number is ${myFavNumber}.`)

//Exercise 2
let myString = "Java is different than JavaScript"

console.log("Length of the string is: " + myString.length)
console.log("All charachters in uppercase: " + myString.toUpperCase())
console.log("Extraction using sclie method: " + myString.slice(23, myString.length))

if (myString.includes("JavaScript")) {
    console.log("The string includes the word 'JavaScript'.");
} else {
    console.log("The string does not include the word 'JavaScript'.");
}

//Exercise 3
let myNumber = 8

if (myNumber > 0) {
    console.log(myNumber + " is a positive number.")
} else if (myNumber < 0) {
    console.log(myNumber + " is a negative number.")
} else {
    console.log("The number is zero.")
}

//Exercise 4
console.log("******* Exercise 4 ********")

if (myNumber % 2 === 0) {
    console.log(myNumber + " is an even number.")
} else {
    console.log(myNumber + " is an odd number.")
}

//Exercise 5
console.log("******* Exercise 5 ********")
let num1 = 10
let num2 = 25
let num3 = 15

if (num1 >= num2 && num1 >= num3) {
    largestNumber = num1
} else if (num2 >= num1 && num2 >= num3) {
    largestNumber = num2
} else {
    largestNumber = num3
}

console.log(`Among the numbers ${num1} and ${num2} and ${num3}, the largest number is: ` + largestNumber)

//Exercise 6
let myGrade = 88
console.log("******* Exercise 6 ********")
console.log(`Given Grade is: ${myGrade}`)
if (myGrade < 0 || myGrade > 100)
{
    console.log("Invalid grade number! It should be between 0 and 100!")
}
else if (myGrade >= 90){
    console.log("Grade Level: A")
}
else if (myGrade >= 80){
    console.log("Grade Level: B")
}
else if (myGrade >= 70)
{
    console.log("Grade Level: C")
}
else if (myGrade >= 60)
{
    console.log("Grade Level: D")
}
else {
    console.log("Grade Level: F")
}

//Exercise 7
let numForMul = 12
console.log("******* Exercise 7 ********")
console.log(`Given number is: ${numForMul}`)
for(i = 1; i <= 10; i++)
{
    console.log(`${numForMul} * ${i} = ` + numForMul * i)
}

//Exercise 8
let myOriginalNumber = 8
console.log("******* Exercise 8 ********")
console.log(`Given number is: ${myOriginalNumber}`)
let result = 1;
for (i = 2; i <= myOriginalNumber; i++)
{
    result *= i
}
console.log(`${myOriginalNumber}! = ${result}`)


//Exercise 9
console.log("******* Exercise 9 (BONUS) ********")
for (i = 1; i < 51; i++)
{
    if (i % 3 == 0){
        if (i % 5 == 0 ) {
            console.log("FizzBuzz")
        }
        else {
            console.log("Fizz")

        }
     } 
     else if (i % 5 == 0){
        console.log("Buzz")
     }     
     else {
        console.log(`${i}`)
     }  
}

//Exercise 10
console.log("******* Exercise 10 (BONUS) ********")

let myArray = [
    { name: "aaa", count: 0 },
    { name: "aaa", count: 0 },
    { name: "aaa", count: 0 },
    { name: "bbb", count: 0 },
    { name: "aaa", count: 0 },
    { name: "ccc", count: 0 },
    { name: "aaa", count: 0 }
];

for (let i = 0; i < myArray.length; i++) {
    console.log(`${myArray[i].name}`);
    for (let j = 0; j < myArray.length; j++) {
        if (i !== j && myArray[i].name === myArray[j].name) {
            myArray[i].count += 1 
        }
    }
}


let found = false; 
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].count === 0) { 
        console.log(`The first unique string in the array is: ${myArray[i].name}.`)
        found = true
        break
    }
}

if (!found) {
    console.log("No unique string found.")
}
