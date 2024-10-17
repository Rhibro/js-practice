// October 16

// övning 1

// let a = 12;
// let b = 5;

// let sum = a + b;
// let differnce = a - b;
// let product = a * b;
// let quotient = a / b;
// let remainder = parseInt(quotient);

// console.log(sum);
// console.log(differnce);
// console.log(product);
// console.log(quotient);
// console.log(remainder);
// // this is a simplified version below 
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // övning 2 

// let userTemp = prompt('please enter a temp in Celsius:');

// let tempConverter = userTemp * 9/5 + 32; 

// console.log(`Temp in F: ${tempConverter}`);

// // övning 3 

// let number1 = parseFloat(prompt('Enter the first number:'));
// let number2 = parseFloat(prompt('Enter the second number:'));

// if (number1 > number2) {
//     console.log(`${number1} is larger than ${number2}`);
// } else if (number2 > number1) {
//     console.log(`${number2} is larger than ${number1}`);
// } else {
//     console.log(`${number1} and ${number2} are equal`);
// }
// // a simpler way to do it 
// let num1 = prompt('Number 1');
// let num2 = prompt('Number 2');

// let result = num1 > num2 ? 'Nr1 is bigger than Nr2' :
//              num1 < num2 ? 'Nr2 is bigger than Nr1' : 'numbers is equal';

// console.log(result); 

// // övning 4

// let userNum = parseFloat(prompt('Please enter a number:'));

// if (userNum % 2 ===0){
//     console.log(`${userNum} is an even number`);
// }else {
//     console.log(`${userNum} is an uneven number`);
// }

// // övning 5 

// let age = parseInt(prompt('Enter your age:'));
// let hasValidID = prompt('Do you have a valid ID? (yes/no)').toLowerCase() === 'yes';

// if (age >= 18 && hasValidID) {
//     console.log("You are allowed to enter the club.");
// } else {
//     console.log("Sorry, you are not allowed to enter the club.");
// }

// // övning 6

// let numOne = parseInt(prompt('please enetr a number:'));
// let numTwo = parseInt(prompt('please enetr a number:'));

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

// // övning 7

// let x = '10';
// let y = 10;

// console.log('x == y', x == y);
// console.log('x === y', x === y);
// - x == y is true because '10' is coerced to the number 10 before comparison
// - x === y is false because x is a string and y is a number, so they have different types

// övning 8 

// let userAge = parseInt(prompt('Please enter your age:'));

// if (isNaN(userAge)) {
//     console.log('please enter an valid number!');
// } else if (userAge >= 13 && userAge <= 19 ) {
//     console.log('You are a teenager!');
// } else {
//     console.log('You are NOT a teenager!')
// }

// övning 9 

// let numOne = parseInt(prompt('Please the first number:'));
// let numTwo = parseInt(prompt('Please the second number:'));
// let numThree = parseInt(prompt('Please enter the third number:'));

// let largest;

// if (numOne >= numTwo && numOne >= numThree) {
//     largest = numOne;
// } else if (numTwo >= numOne && numTwo >= numThree) {
//     largest = numTwo;
// } else {
//     largest = numThree;
// }

// console.log('The largest number is:', largest);

// övning 10

let passW = prompt('Please enter your password:');

let isLongEnough = passW.length >= 8;
let hasDigit = /\d/.test(passW);

let validPass = isLongEnough && hasDigit;

if (validPass) {
    console.log('Valid Password');
}else{
    console.log('Password is not valid...');
}

// övning 11 

// övning 11

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Ask the user to enter a year
let year = parseInt(prompt('Enter a year:'));

// Check if the input is a valid number
if (isNaN(year)) {
    console.log("Please enter a valid year.");
} else {
    // Determine if it's a leap year and print the result
    if (isLeapYear(year)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

// October 17
// öving 1 

// let sentence = prompt('Please write a sentence:');
// let upperCaseSentence = sentence.toUpperCase();
// let lowerCaseSentence = sentence.toLowerCase();

// console.log(upperCaseSentence);
// console.log(lowerCaseSentence);

//  övning 2 

// let js = 'JavaScript';

// let firstLetter = js.charAt(0);
// let fourchar = js.slice(0, 4);

// console.log(firstLetter);
// console.log(fourchar);

// övning 3

// let userInput = prompt('please enter a list of words separated by a comma:');

// let wordsArray = userInput.split(',');

// console.log(wordsArray);

// let joinedString = wordsArray.join(' ');

// console.log(joinedString);

// övning 4

// let stringy = 'I love programming!';

// let doesInclude = stringy.includes('progamming');
// let Replace = stringy.replace('programming', 'JavaScript');

// console.log(Replace);

// övning 5 

