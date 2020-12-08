const inquirer = require("inquirer");

const Manager = require("./lib/Manager");

const createEngineer = () => {
  // return  { name, id, email, github }

  if (team === "Intern") {
    // run createIntern
  } else if (team === "Engineer") {
    // run createEngineer
  } else {
    // return member
  }
};
const createIntern = async () => {
  const { name, id, email, school, team } = await inquirer.prompt([
    { name: "name", message: "What is the team members name?" },
    { name: "id", message: "What is the team members ID number?" },
    { name: "email", message: "What is the team member email?" },
    { name: "school", message: "What is the team members school?" },
    {
      type: "list",
      message: "What type of team member would you like to add?",
      name: "team",
      choices: ["Engineer", "Intern", "I don't want to add any more members."],
    },
    // return  { name, id, email, school }
    // if team !== 'no more' the run either createIntern
  ]);

  let member;

  if (team === "Intern") {
    member = await createIntern();
  } else if (team === "Engineer") {
    // run createEngineer
  } else {
    return member;
  }
};

const createTeam = async () => {
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

  let member;

  if (team === "Intern") {
    member = await createIntern();
  } else if (team === "Engineer") {
    // run createEngineer
  } else {
    // create html file
  }
  console.log(team);
  console.log(manager);
  console.log(member);

  // return html file
};

createTeam();
