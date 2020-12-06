const inquirer = require("inquirer");

const run = async () => {
  const answers = await inquirer.prompt([
    { name: "name", message: "What is your name?" },
  ]);
  console.log(answers);
};

run();
