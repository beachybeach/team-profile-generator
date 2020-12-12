const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const { createTeam } = require("../lib/Team");

// TODO: Make Email & Github a link

const buildPage = (teamMembers) => {
  //CONSTRUCTS THE HTML
  const createMemberHTML = ({ name, id, email, member, ...rest }) => {
    const extra = Object.values(rest);
    return `
    <div class="card col text-center" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">Name: ${name}</h5>
    <p>ID Number: ${id}</p>
      <p class="card-text"><a href="mailto:${email}">Email: ${email}</a></p>
      <p class="card-text">Position: ${member}</p>
      <p class="card-text">${extra}</p>
      </div>
     </div>
    `;
  };

  const membersHTML = teamMembers.map((member) => createMemberHTML(member));

  const file = `<!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="utf-8">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/Minty/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="./src/style.css" rel="stylesheet" />
    
  </head>
  
  <body>
    <header>
    <h1> My Team </h1>
    </header>
 <div class = "container">
    <div class="row align-items-center">
    ${membersHTML.join("")}
  </div>
  </div>
    <script src="js/script.js"></script>
  </body>
  
  </html>`;

  fs.writeFile("index.html", file, (err) => {
    if (err) throw err;
  });
};

module.exports = { buildPage };
