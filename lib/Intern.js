const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, member, school) {
    super(name, id, email, member);
    this.school = school;
  }
}

module.exports = Intern;
