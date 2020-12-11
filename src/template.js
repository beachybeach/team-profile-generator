const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

// TODO: Make Email & Github a link

const buildPage = (teamMembers) => {
  //CONSTRUCTS THE HTML
  const createMemberHTML = ({ name, id, email, member, ...extra }) => `
  <div>
    <h2>${name}</h2>
    <p>${id}</p>
    <p>${email}</p>
    <p>${member}</p>
    <p>${extra}</p>
  </div>;
  `;

  const membersHTML = teamMembers.map((member) => createMemberHTML(member));
};

`<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="css/style.css" rel="stylesheet">
</head>

<body>

  <p></p>

  <script src="js/script.js"></script>
</body>

</html>`;
