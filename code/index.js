// write to the console
console.log("Hello from the Javascript file")


// variable
let myName = "Omar"

console.log(myName)

// camelCase my main city

const myMainCity = "New York City"


// let vs const

myName = "Kai"

console.log(myName)

// myMainCity = "paris"

// number
let myFavNumber = 8.8

// Boolean
let isEuropean = true

let isAdmin = false

let myStudents = ["Aron","Sumayya","Martine"]

let myTeacher = {
    name:"Omar",
    country:"Saudi Arabia",
    Occupation:"Teaching/Programming"
}

console.log(myStudents)

let something = null

console.log(something)

/* 
Data Types:

1. String

2. Number

3. Booleans

4. Arrays

5. Objects

6. null

7. undefined

*/


// typeof shows the data type of a variable
console.log(typeof isEuropean)



let myNewNumber = myFavNumber + 5

console.log(myNewNumber)


// myFavNumber = myFavNumber + 1

myFavNumber+=2

console.log(myFavNumber)


let someNumber = 95

someNumber+=10

console.log(someNumber)


// String

let myNewString = 'I love Javascript'
let myNewSecondString = "I love Java"

let myFirstLanguage = "Java"
let mySecondLanguage = "JavaScript"


// backtick
let myThirdString = `I love both java and javascript`

console.log("I love " + myFirstLanguage + " and " + mySecondLanguage)

console.log(`I love ${myFirstLanguage} and ${mySecondLanguage}`)


// methods

let teacherName = "Omar ab"

console.log(teacherName.charAt(5))

console.log(teacherName.includes("o"))

console.log(teacherName.startsWith("Om"))

console.log(teacherName.endsWith("Om"))

console.log(teacherName.toUpperCase())

console.log(teacherName.toLowerCase())

console.log(teacherName.slice(0,6))

console.log("c".localeCompare("c"))

console.log(teacherName.length)


let myBoolean = 5<2 || 10>3

let secondBool = 5>2 && 10<3
// or and
console.log(secondBool)

// not operator
console.log(!secondBool)



let myLastName = "Weluda"

if(myLastName=="Smith"){
    console.log("Your name is smith and is the most common last name")
}
else{
    console.log("sorry your name is not smith and is not common")
}



let myAge = 65

if(myAge <18){
    console.log("You cannot come in at all")
}
else if(myAge>18 && myAge<21){
    console.log("You are allowed in but cannot drink, here is a wrist band")
}
else if(myAge ==65){
    console.log("Congrats were a weird bar you get to drink for free because youre 65")

}
else{
    console.log("You are allowed in please be responsible")
}

/* 
Exercise 1: declare 3 variables for name, city, and favNumber and console.log() each like the following "My name is Omar"

Exercise 2: given the following string "Java is different than JavaScript"
    console.log(): the length of the string, the string in all uppercase, extract the word javaScript using slice(), check if the string includes the word javaScript

Exercise 3: given a variable myNumber that you pick the value of. Check if the number is positive or negative. console.log a string like the following "5 is a positive number"

Exercise 4: given the same variable myNumber check if the number is even or odd. HINT use the %

Exercise 5: given 3 numbers num1, num2, num3 console.log() the largest number
*/



let myVariable = "A value"



// for loops

// for(starting point, stopping point, incrementation/decrementation)

for(let i =10;i>=0;i--){
    console.log(i)
}




// Arrays

// ordered set of values

let omarsStudents = ["Kai","Martine","Maryam",5,true]

console.log(omarsStudents)

console.log(omarsStudents.length)

// getting the last value in the array
console.log(omarsStudents[omarsStudents.length-1])

// methods
// push()
omarsStudents.push("Sumayya")

console.log(omarsStudents)

omarsStudents.shift()

console.log(omarsStudents)

omarsStudents.unshift("Paul")

console.log(omarsStudents)



// objects
// collection of values. they are unordered
// key: values

let myStudent1 = {

    name: "Aron",
    country: "Germany"
}

console.log(myStudent1.name)


myStudent1.occupation = "Dev"

console.log(myStudent1)