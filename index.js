const inquirer = require("inquirer");

const Manager = require("./lib/Manager");

const managerInfo = async () => {
  const { name, id, email, office } = await inquirer.prompt([
    { name: "name", message: "What is the team managers name?" },
    { name: "id", message: "What is the team managers ID number?" },
    { name: "email", message: "What is the team managers email?" },
    { name: "office", message: "What is the team managers office number?" },
  ]);

  const manager = new Manager(name, id, email, office);

  console.log(manager);
};

managerInfo();
