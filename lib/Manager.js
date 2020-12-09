const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, member, office) {
    super(name, id, email, member);
    this.office = office;
  }
}

module.exports = Manager;
