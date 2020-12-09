const inquirer = require("inquirer");

const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");

const createTeam = async () => {
  const teamMember = await inquirer
    .prompt([
      { name: "name", message: "What is the team members name?" },
      { name: "id", message: "What is the team members ID number?" },
      { name: "email", message: "What is the team members email?" },
    ])

    .then((teamMember) => {
      (this.manager = new Manager(
        teamMember.name,
        teamMember.id,
        teamMember.Email,
        (teamMember.member = "Manager".TeamMember.officeNumber)
      )),
        members.push(this.manager);
    });

  while (true) {
    const teamMember = await inquirer.prompt([
      {
        type: "list",
        message: "What type of team member would you like to add?",
        name: "newMember",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more members.",
        ],
      },
      { name: "name", message: "What is the team members name?" },
      { name: "id", message: "What is the team members ID number?" },
      { name: "email", message: "What is the team members email?" },
    ]);
  }
};
