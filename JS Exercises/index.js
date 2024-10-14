// write to the console
console.log("Hello from the JavaScript file")


// variable
let myName = "My name is Aron"

console.log(myName)

// camelCase my main city

myMainCity = "I live in Berlin"

// number
let myFavNumber = "21"





// String

let myNewString = "Java is differnt than JavaScript"

console.log(myNewString.length)

console.log(myNewString.toUpperCase())

console.log(myNewString.slice(0,12))

console.log(myNewString.includes("JavaScript"))



if(myFavNumber >20)(
    console.log("21 is a positive number")
                    )

console.log(21%2)
console.log(21%3)
console.log(21%4)
console.log(21%5)
console.log(21%6)
console.log(21%7)



const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // Output: 3

let myGrade = 77

if(myGrade>90 && myGrade<100)
            {
    console.log("A")
                }
    else if(myGrade>80 && myGrade<89)
            {
        console.log("B")
                }
    else if(myGrade>70 && myGrade<79)
            {
        console.log("C")
                }
    else if(myGrade>60 && myGrade<69)
            {
        console.log("D")
                }
    else if(myGrade<60)
            {
        console.log("F")
                }

                function printNumbers(num) {

                    if (num < 1) {
                        console.error('num must be greater than 1');
                        return;
                    }
                
                    if (!Number.isInteger(num)) {
                        num = Math.trunc(num);
                    }
                
                    for (var i = 1; i <= num; i++) {
                        console.info(i);
                    }
                }
                
                printNumbers(10);
                
                let n = 3; 

                function factorial(n) { 
                    let ans = 1; 
                    
                    if(n === 0)
                        return 1;
                    for (let i = 2; i <= n; i++) 
                        ans = ans * i; 
                    return ans; 
                }
                
                console.log(factorial(n));
                
                printNumbers(50);

                


