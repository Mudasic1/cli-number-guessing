#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\tWelcome to the Mudasir chandio - \n\tCLI NUMBER GUESSING GAME");
const random = Math.floor(Math.random() * 10 + 1);
const answar = await inquirer.prompt([{
        name: "userGuessingNumber",
        type: "number",
        message: "Guess a number (number limit 1-10)"
    }]);
if (answar.userGuessingNumber === random) {
    console.log("Congratulations you entered right number!");
}
else {
    console.log("Sorry you entered wrong number!");
}
