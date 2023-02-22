//TODO: Create an Engineer subclass that extends Employee and adds a githubUsername attribute.
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, githubUsername) {
    super(name, id, email, "Engineer");
    this.githubUsername = githubUsername;
    this.name = name;
    this.id = id;
    this.email - email;
  }
}

module.exports = Engineer;
