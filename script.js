// övning 1
console.log('övning 1');

let FirstName = 'Rhiannon';

let LastName = 'Brönnimann';

let age = 31 ;

console.log(`Hello, my name is ${FirstName}, ${LastName} and I am ${age} years old` )

// övning 2
console.log('övning 2');

let a = 5;
let b = 10;

console.log("a =", a , "b=", b)

let temp = a;
a = b;
b = temp; 

console.log("a =", a , "b =", b)

// övning 3
console.log('övning 3');

let firstName = "Rhiannon ";
let middleName = "Louise ";
let lastName = "Brönnimann";

let fullName = firstName + middleName + lastName;

console.log(fullName)

// övning 4
console.log('övning 4');

let radius = 5;
const pi = Math.PI;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;

console.log('Radius =', radius);
console.log('Circumference =', circumference);
console.log('Area =', area);

// övning 5
console.log('övning 5');

let num = 5;
let string = 'string';
let bool = true;
let obj = { food: 'pizza', drink: 'pop'};
let cows;
let empty = null;

console.log(typeof num);
console.log(typeof string);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof cows);
console.log(typeof empty);

// övning 6
console.log('övning 6');

let x = '5';
let y = 3;

let formula = x + y; 

console.log(formula);
console.log(Number(x) + y);
console.log( x * y );
console.log(x / y);

// övning 7
console.log('övning 7');

let userInput = prompt('write a value:');

console.log(`Input: ${userInput}`);
console.log('Type:', typeof userInput);

if (!isNaN(userInput)) {
    let convertValue = Number(userInput);

    console.log(convertValue);
    console.log(typeof convertValue);
} else {
    console.log('cannot be converted into a number');
}

// övning 8
// let numOne = prompt('please enetr a number:');
// let numTwo = prompt('please enetr a number:');

// numOne = Number(numOne);
// numTwo = Number(numTwo);

// if (isNaN(numOne) || isNaN(numTwo)) {
//     console.log('please enter a number!');
// }else{
//     let operation = prompt('choose an operation: +, -, *, /');

//     let result; 
//     switch (operation) {
//         case '+': 
//         result = numOne + numTwo;
//         console.log(`${result}`);
//         break;
//         case '-': 
//         result = numOne - numTwo;
//         console.log(`${result}`);
//         break;
//         case '*': 
//         result = numOne * numTwo;
//         console.log(`${result}`);
//         break;
//         case '/': 
//         if (numTwo === 0){console.log('error')}
//         else {
//         result = numOne / numTwo;
//         console.log(`${result}`);
//         }
//         break;
//     }
// }



// övning 9

// övning 10

// övning 11

// övning 12

// övning 13

// övning 14

// function checkAndConvert() {
//     let userInput = prompt("Please enter a value:");
//     let type = typeof userInput;

//     console.log(`Original input: ${userInput}`);
//     console.log(`Type: ${type}`);

//     if (type === "string") {
//         let numConversion = Number(userInput);
//         console.log(`Converted to number: ${numConversion}`);
//         console.log(`Is NaN: ${isNaN(numConversion)}`);
//     } else if (type === "number") {
//         console.log(`Converted to string: ${userInput.toString()}`);
//     } else if (type === "boolean") {
//         console.log(`Converted to string: ${userInput.toString()}`);
//         console.log(`Converted to number: ${Number(userInput)}`);
//     } else {
//         console.log("The input is neither a string, number, nor boolean.");
//     }
// }

// checkAndConvert();