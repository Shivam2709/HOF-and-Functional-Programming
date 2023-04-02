/**
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
variable so can be modified. The program displays a message every second indicating the time remaining
until the random number is generated and then outputs the generated number.
 */


// delay in milliseconds
let delay = 3000;

function generateRandomNumber() {

    // generates a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number: ${randomNumber}`);
}

function countdown() {
    let counter = delay / 1000;
    console.log(`Generating random number in ${counter} seconds...`);

    const intervalId = setInterval(() => {
        counter--;
        console.log(`Generating random number in ${counter} seconds...`);
        if (counter === 0) {
            clearInterval(intervalId);
            generateRandomNumber();
        }
    }, 1000);

}

setTimeout(countdown, delay);