#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber= Math.floor(Math.random()*6+1);
const answer = await inquirer.prompt([{
    name: "Userguessnumber",
    type: "number",
    message:" Please enter a number between 1 to 6:"
}])
if(answer.Userguessnumber === randomNumber)
{
    console.log("Congratulation You guess a correct number")
}
else{
    console.log("You guess a wrong number")
}
console.log("Number is" + " " +randomNumber)

