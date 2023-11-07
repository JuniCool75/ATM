import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter Your Id:",
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter Your Pin:",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast cash", "Withdraw"],
        message: "Select Your Transaction Type:",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 30000, 50000],
        message: "Select Your Amount:",
        when(answers) {
            return answers.transactionType == "Fast cash";
        },
    },
    {
        type: "number",
        name: "amount",
        Enter: "Enter Your Amount",
        when(answers) {
            return answers.transactionType == "withdraw";
        }
    }
]);
if (answers.userId && answers.userPin) {
    let balance = 100000;
    // let balance = Math.floor(Math.random()*100000);
    console.log("Previous Balance", balance);
    let enterAmount = answers.amount;
    if (balance > enterAmount) {
        let remaining = balance - enterAmount;
        console.log("Your Remaining Balance Is:", remaining);
    }
    else {
        console.log("Insufficient Balance");
    }
}
;
