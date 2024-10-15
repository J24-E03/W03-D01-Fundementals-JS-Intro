// Exercise 1:

let myName = "Martine";
let myCity = "Berlin";
let favNumber = "8";

console.log("My name is " + myName);
console.log("I live in " + myCity);
console.log("My favorite number is " + favNumber);

// Exercise 2:

let myString = "Java is different than JavaScript";

console.log(myString.length);

console.log(myString.toUpperCase());

console.log(myString.slice(23, 33));

console.log(myString.includes("JavaScript"));

// Exercise 3:

let myNumber = 6;

if (myNumber > 0) {
  console.log(myNumber + " is a positive number");
} else if (myNumber < 0) {
  console.log(myNumber + " is a negative number");
} else {
  console.log(myNumber + " is zero");
}

// Exercise 4:

if (myNumber % 2 === 0) {
  console.log(myNumber + " is an even number");
} else {
  console.log(myNumber + " is an odd number");
}

// Exercise 5:

let num1 = 2;
let num2 = 22;
let num3 = 222;

let largestNumber = Math.max(num1, num2, num3);
console.log("The largest number is " + largestNumber);

// Exercise 6:

let myGrade = 17;

if (myGrade >= 90 && myGrade <= 100) {
  console.log("A");
} else if (myGrade >= 80 && myGrade < 90) {
  console.log("B");
} else if (myGrade >= 70 && myGrade < 80) {
  console.log("C");
} else if (myGrade >= 60 && myGrade < 70) {
  console.log("D");
} else if (myGrade < 60 && myGrade >= 0) {
  console.log("F");
}


// Exercise 7:

let number = 3;

for (let i= 1; i <= 10; i++) {
  let result = number*i;
  console.log(number + "x" + i + " = " + result);


}

// Exercise 8:

let myOriginalNumber = 6;
let factorialResult = 1;

for (let i = 1; i <= myOriginalNumber; i++) {
  factorialResult *= i;
}

console.log("The factorial of " + myOriginalNumber + " is " + factorialResult);


