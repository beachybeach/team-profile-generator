const inquirer = require("inquirer");

const Manager = require("./lib/Manager");

const managerInfo = async () => {
  const { name, id, email, office, team } = await inquirer.prompt([
    { name: "name", message: "What is the team managers name?" },
    { name: "id", message: "What is the team managers ID number?" },
    { name: "email", message: "What is the team managers email?" },
    { name: "office", message: "What is the team managers office number?" },
    {
      type: "list",
      message: "What type of team member would you like to add?",
      name: "team",
      choices: ["Engineer", "Intern", "I don't want to add any more members."],
    },
  ]);

  const manager = new Manager(name, id, email, office);
  console.log(team);
  console.log(manager);
};

managerInfo();

if (team !== "I don't want to add any more members.") {
}

if (team === "I don't want to add any more members.") {
  //creates html w/ team members chosen
}
