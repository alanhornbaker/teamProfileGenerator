//TODO:Create an Intern subclass that extends Employee and adds a school attribute
const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, "Intern");
    this.officeNumber = officeNumber;
    this.name = name;
    this.id = id;
    this.email - email;
  }
}

module.exports = Intern;
