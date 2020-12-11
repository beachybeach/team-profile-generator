const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const teamMembers = [];

const createTeam = async () => {
  const Employee = await inquirer
    .prompt([
      { name: "name", message: "What is the team members name?" },
      { name: "id", message: "What is the team members ID number?" },
      { name: "email", message: "What is the team members email?" },
    ])
    .then((Employee) => {
      (this.manager = new Manager(
        Employee.name,
        Employee.id,
        Employee.Email,
        (Employee.member = "Manager"),
        Employee.office
      )),
        teamMembers.push(this.manager);
    });

  while (true) {
    const Employee = await inquirer.prompt([
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

    if (Employee.member === "Intern") {
      await inquirer
        .prompt([
          {
            name: "school",
            message: "What school does this team member attend?",
          },
        ])
        .then(({ school }) => {
          this.Intern = new Intern(
            Employee.name,
            Employee.id,
            Employee.email,
            Employee.member,
            school
          );
        });
      teamMembers.push(this.Intern);
    } else if (Employee.member === "Engineer") {
      await inquirer
        .prompt([
          {
            name: "github",
            message: "What is the team members github username?",
          },
        ])
        .then(({ github }) => {
          this.Engineer = new Engineer(
            Employee.name,
            Employee.id,
            Employee.email,
            Employee.member,
            github
          );
        });
      teamMembers.push(this.Engineer);
    } else {
      console.log("add more team members?");
    }
  }
};

module.exports = createTeam();
