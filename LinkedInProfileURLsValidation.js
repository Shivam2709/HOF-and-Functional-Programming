/**
 As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https:// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters. The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs that do not follow this format or contain invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile URL or not.
 */

function validateLinkedIn(url) {
    // Define the regular expression for valid LinkedIn URLs

    var regex = /^https:\/\/www\.linkedin\.com\/in\/[a-z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the input URL against the regular expression
    if(regex.test(url)) {
        console.log(url + " is a valid LinkedIn profile URL.");
    } else {
        console.log(url + " is not a valid LinkedIn profile URL.");
    }
}

validateLinkedIn("https://www.linkedin.com/in/john-doe123"); 
validateLinkedIn("https://www.linkedin.com/in/john_doe"); 
validateLinkedIn("https://www.linkedin.com/in/john-doe-123"); 
validateLinkedIn("https://www.linkedin.com/in/John_Doe"); 
validateLinkedIn("https://www.linkedin.com/in/john-doe_123/"); 
validateLinkedIn("https://www.linkedin.com/in/johndoe123456789012345678901234567890");