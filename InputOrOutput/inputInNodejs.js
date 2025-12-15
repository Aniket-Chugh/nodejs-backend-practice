const readline = require("readline");

// Create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// cant run two questions , only one time the first one will be run

// First question
// rl.question("Enter your name: ", (name) => {
//     console.log("Hello, " + name);

//     // Second question inside first callback
//     rl.question("Enter your age too: ", (age) => {
//         console.log("Ohh so you are: " + age);
//     });
// });


rl.question("Enter your name and age separated by space: ", (input) => {
    const [name, age] = input.split(" "); // split input into two parts
    console.log(`Name: ${name}, Age: ${age}`);
    rl.close();
});
