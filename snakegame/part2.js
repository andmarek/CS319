//Author: Andrew Marek

let requirements = require('readline-sync');
let  array = [];

for (let i = 0; i < 4; i++) {
    array.push(requirements.question((i + 1) + ' number: '));
}

console.log("Factorial of the number 1: ", factorial(array[0]));
console.log("Sum of digits in number 2: ", sumDigits(array[1]));
console.log("Reverse of the number 3: ", reverseNum(array[2]));
isPalindrome(array[3]);

function reverseNum(number) {
    let str = number.toString();
    return str.split("").reverse().join("");
}

function sumDigits(number) {
    let str = number.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += parseFloat(str[i]);
    }
    return sum;
}

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

function isPalindrome(number) {
    let str = number.toString();
    palin = str === str.split('').reverse().join('');
    if (palin) {
        console.log("the number is  a palindrome");
    } else {
        console.log("the number is not a palindrome");
    }
}