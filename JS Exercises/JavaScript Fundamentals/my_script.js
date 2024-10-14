/*Exercise 1*/

let name = "Kathrin";
let city = "Tarp";
let favNumber = 7;

console.log("My name is " + name);
console.log("I live in " + city);
console.log("My favorite number is " + favNumber);




/*Exercise 2*/

let myString = "Java is different than JavaScript";


console.log("Length of the string: " + myString.length);


console.log("Uppercase: " + myString.toUpperCase());


let javaScriptWord = myString.slice(24);
console.log("Extracted word: " + javaScriptWord);


console.log("Includes 'JavaScript'? " + myString.includes("JavaScript"));



/*Exercise 3*/

let myNumber = 5;

if (myNumber > 0) {
  console.log(myNumber + " is a positive number");
} else if (myNumber < 0) {
  console.log(myNumber + " is a negative number");
} else {
  console.log("The number is zero");
}


/*Exercise 4*/

if (myNumber % 2 === 0) {
    console.log(myNumber + " is an even number");
  } else {
    console.log(myNumber + " is an odd number");
  }



  /*Exercise 5*/

  let num1 = 15;
let num2 = 42;
let num3 = 27;

let largest = Math.max(num1, num2, num3);
console.log("The largest number is: " + largest);


/*Exercise 6*/

let myGrade = 85;

if (myGrade >= 90 && myGrade <= 100) {
  console.log("A");
} else if (myGrade >= 80 && myGrade < 90) {
  console.log("B");
} else if (myGrade >= 70 && myGrade < 80) {
  console.log("C");
} else if (myGrade >= 60 && myGrade < 70) {
  console.log("D");
} else {
  console.log("F");
}


/*Exercise 7*/

let number = 7;

for (let i = 1; i <= 10; i++) {
  console.log(number + " * " + i + " = " + (number * i));
}


/*Exercise 8*/
let myOriginalNumber = 5;
let factorial = 1;

for (let i = myOriginalNumber; i > 0; i--) {
  factorial *= i;
}

console.log("The factorial of " + myOriginalNumber + " is " + factorial);


/*Exercise 9*/

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }


  /*Exercise 10*/

  let strings = ["apple", "banana", "orange", "apple", "banana"];

  function findFirstUnique(arr) {
    let occurrences = {};
  
    
    for (let str of arr) {
      occurrences[str] = (occurrences[str] || 0) + 1;
    }
  
    
    for (let str of arr) {
      if (occurrences[str] === 1) {
        return str;
      }
    }
  
    return "No unique string found";
  }
  
  console.log(findFirstUnique(strings));


