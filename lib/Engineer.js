const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, member, github) {
    super(name, id, email, member);
    this.github = github;
  }
}

module.exports = Engineer;
