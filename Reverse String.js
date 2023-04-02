/**
 The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
 of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
 2 seconds before reversing the string. The reversed string should then be printed as output.
 */

// Input String 
let input ="Hello , Shivam";

// Delay function 
function delay(callback, time){
    setTimeout(callback, time);
}

// Reverse function
function reverseString(str){
    return str.split("").reverse().join("");
}

// Delay reverse function
function delayReverse(str){
    delay(function() {
        let reversed = reverseString(str);
        console.log(reversed);
    },2000);
}

// Call delay function with input string
delayReverse(input);