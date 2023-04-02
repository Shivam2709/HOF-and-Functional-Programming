/**
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees.
 */

const pricesUSD = {
    item1: 10,
    item2: 20,
    item3: 30,
    item4: 40,
    item5: 50
}

const exchangeRate = 80;

const priceInIndia = Object.keys(pricesUSD).map((item) => {
    return {[item]: pricesUSD[item] * exchangeRate };
});

console.log(priceInIndia);