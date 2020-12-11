const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
let newMember;
const teamMembers = [];

const createTeam = async () => {
  const ManagerEntries = await inquirer.prompt([
    { name: "name", message: "What is the team members name?" },
    { name: "id", message: "What is the team members ID number?" },
    { name: "email", message: "What is the team members email?" },
    { name: "office", message: "What is the team members office number?" },
    {
      type: "list",
      message: "What type of team member would you like to add?",
      name: "member",
      choices: ["Engineer", "Intern"],
    },
  ]);

  teamMembers.push(
    new Manager(
      ManagerEntries.name,
      ManagerEntries.id,
      ManagerEntries.email,
      "Manager",
      ManagerEntries.office
    )
  );

  while (true) {
    if (newMember === "No more") {
      break;
    }

    const Employee = await inquirer.prompt([
      { name: "name", message: "What is the team members name?" },
      { name: "id", message: "What is the team members ID number?" },
      { name: "email", message: "What is the team members email?" },
    ]);

    console.log(
      `🚀 ~ file: Team.js ~ line 47 ~ createTeam ~ ManagerEntries`,
      ManagerEntries
    );
    if (newMember === "Intern" || ManagerEntries.member === "Intern") {
      await inquirer
        .prompt([
          {
            name: "school",
            message: "What school does this team member attend?",
          },
        ])
        .then(({ school }) => {
          teamMembers.push(
            new Intern(
              Employee.name,
              Employee.id,
              Employee.email,
              "Intern",
              school
            )
          );
        });
    } else if (
      newMember === "Engineer" ||
      ManagerEntries.member === "Engineer"
    ) {
      await inquirer
        .prompt([
          {
            name: "github",
            message: "What is the team members github username?",
          },
        ])
        .then(({ github }) => {
          teamMembers.push(
            new Engineer(
              Employee.name,
              Employee.id,
              Employee.email,
              "Engineer",
              github
            )
          );
        });
    }

    await inquirer
      .prompt([
        {
          type: "list",
          message: "What type of team member would you like to add?",
          name: "member",
          choices: ["Engineer", "Intern", "No more"],
        },
      ])
      .then(({ member }) => {
        newMember = member;
      });
  }
};

createTeam();
