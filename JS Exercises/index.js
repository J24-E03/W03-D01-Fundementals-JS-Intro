// Exercise 1
const nameCityNumber = (name, city, number) => {
  console.log("My name is: " + name);
  console.log("I live in " + city);
  console.log("My favorite number is: " + number);
};

nameCityNumber("Kai", "Berlin", "8");

// Exercise 2
const stringManipulation = (inputString) => {
  console.log("Length of string: " + inputString.length);
  console.log("String in uppercase: " + inputString.toUpperCase());

  const substring = inputString.slice(-10);
  console.log("Substring: " + substring);
  console.log(
    "String includes substring " +
      substring +
      ": " +
      inputString.includes(substring)
  );
};

stringManipulation("Java is different than JavaScript");

// Exercise 3
const isNumberPositive = (number) => {
  if (number > 0) {
    console.log(number + " is positive!");
  } else if (number < 0) {
    console.log(number + " is negative!");
  } else {
    console.log("The number is 0!");
  }
};

isNumberPositive(5);
isNumberPositive(-5);
isNumberPositive(0);

//Exercise 4

const isNumberEven = (number) => {
  if (number % 2 === 0) {
    console.log(number + " is even!");
  } else {
    console.log(number + " is uneven!");
  }
};

isNumberEven(6);
isNumberEven(3);
isNumberEven(0);

//Exercise 5
const highestNumberInArray = (array) => {
  console.log("Highest number is: " + array.sort((a, b) => a - b).pop());
};

highestNumberInArray([5, 3, -1000, 1, 0, 7, -9999, 1312]);

//Exercise 6
const convertGrade = (grade) => {
  if (grade >= 90) {
    console.log("Your grade is: A");
  } else if (grade >= 80) {
    console.log("Your grade is: B");
  } else if (grade >= 70) {
    console.log("Your grade is: C");
  } else if (grade >= 60) {
    console.log("Your grade is: D");
  } else {
    console.log("Your grade is: F");
  }
};

convertGrade(99);
convertGrade(44);

//Exercise 7
const multiplicationTable = (number) => {
  console.log("Multiplication table for " + number);
  for (i = 1; i <= 10; i++) {
    console.log(number + " * " + i + " = " + number * i);
  }
};

multiplicationTable(23);

//Exercise 8
const calculateFactorial = (number) => {
  factorial = number;
  if (factorial > 1) {
    factorial = factorial * calculateFactorial(factorial - 1);
  }
  return factorial;
};

// i forgot how high primitive numbers in js can go
console.log(calculateFactorial(3));
// 220! is too high ;)
console.log(calculateFactorial(220));

//Exercise 9
const fizzBuzz = () => {
  for (i = 1; i <= 50; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();

//Exercise 10

const findUniqueString = (inputArray) => {
  for (i = 0; i < inputArray.length; i++) {
    if (
      inputArray.indexOf(inputArray[i]) ===
      inputArray.lastIndexOf(inputArray[i])
    ) {
      return inputArray[i];
    }
  }
  return "No unique string in array!";
};

console.log(findUniqueString(["Karl", "Kai", "Kai", "Peter", "Karl"]));
console.log(findUniqueString(["Karl", "Peter", "Kai", "Kai", "Peter", "Karl"]));
