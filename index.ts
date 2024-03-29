#! /usr/bin/env node
import inquirer from "inquirer"; 

const asnwer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name:"secondNumber" },
  {
    message: "Select One Of The Oerator To Perform Action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Multiplication", 
    "Subtraction", "Division"],
  },
]);
//conditional statement
if (asnwer.operator === "Addition") {
  console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operator === "Subtraction") {
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operator === "Multiplication") {
  console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.operator === "Division") {
  console.log(asnwer.firstNumber / asnwer.secondNumber);
} else {
  console.log("please select valid operator");
};