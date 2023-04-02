/**
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
Print a message indicating if the input matches the conditions or not.
 */

const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-.~:/?#[\]@!$&'()*+,;=]+[a-zA-z]+$/;

function isValidUrl(input) {
    if (regex.test(input)) {
        console.log("The URL is valid.");
    }else {
        console.log("The URL is not valid.");
    }
}

isValidUrl("https://www.google.com");
isValidUrl("http://www.example.com/path?param=value");
isValidUrl("ftp://www.example.com");