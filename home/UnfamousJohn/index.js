/**
 * Exercise 1.
 */
const nickname = "Infamous John";
const city = "Berlin";
const favoriteNumber = 42;
console.log(`Name: ${nickname}`);
console.log(`City: ${city}`);
console.log(`Favorite Number: ${favoriteNumber}`);

/**
 * Exercise 2.
 */
const stringLength = "Java is different than JavaScript";
console.log(`String length is: ${stringLength.length}`);
console.log(`String to upper case is: ${stringLength.toUpperCase()}`);
console.log(`String slice is: ${stringLength.slice(23)}`);
console.log(`String includes is: ${stringLength.includes("JavaScript")}`);

/**
 * Exercise 3.
 */
const myNumber = 10;
if (myNumber >= 0) {
    console.log("My number (10) is greater/equal than 0.");
}

/**
 * Exercise 4.
 */
if (myNumber%2 === 0) {
    console.log("My number (10) is even.");
}

/**
 * Exercise 5.
 */
const num1 = 5;
const num2 = 10;
const num3 = 8;
if (num2 >= num1 && num2 >= num3) {
  console.log("My number (10, in addition to 5 & 8) is the largest number.");
}

/**
 * Exercise 6.
 */
const myGrade1 = 93;
if (myGrade1 >= 90) {
    console.log("A");
}

const myGrade2 = 93;
if (myGrade2 >= 80 && myGrade2 <= 89) {
    console.log("B");
}

const myGrade3 = 73;
if (myGrade3 >= 70 && myGrade3 <= 79) {
    console.log("C");
}

const myGrade4 = 63;
if (myGrade4 >= 60 && myGrade4 <= 69) {
    console.log("D");
}

const myGrade5 = 53; 
if (myGrade5 < 60) {
    console.log("F");
}

/**
 * Exercise 7.
 */
for (let i = 1; i <= 10; i++) {
    console.log(`${myNumber} * ${i} = ${myNumber * i}`);
}

/**
 * Exercise 8.
 */
const myOriginalNumber = 3;
let myFactorial = 1;
for (let i = 1; i <= myOriginalNumber; i++) {
    myFactorial *= i;
    console.log(`Factorial of ${myOriginalNumber} is: ${myFactorial}`);
}

/**
 * Exercise 9.
 */
for (let i = 1; i <= 50; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
        continue;
    }
    
    if (i%3 === 0) {
        console.log("Fizz");
        continue;
    }
    
    if (i%5 === 0) {
        console.log("Buzz");
        continue;
    }

    console.log(i);
}

/**
 * Exercise 10.
 */
// Hint: You wouldn't really need one or more objects to solve this problem, but I'm using it to demonstrate the concept. :)
// Using an object just saves us from using nested loops.
const strings = ["hello", "hello", "world", "world", "unique1", "hello", "world", "hello", "unique2", "world"];
const stringsObj = {};
for (let i = 0; i < strings.length; i++) {
    if (stringsObj[strings[i]]) {
        stringsObj[strings[i]]++;
        continue;
    }

    stringsObj[strings[i]] = 1;
}

for (let i = 0; i < strings.length; i++) {
    if (stringsObj[strings[i]] === 1) {
        console.log(`First non-repeating string is: ${strings[i]}`);
        break;
    }
}