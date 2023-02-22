// Importing the Employee parent class:
const Employee = require("./employee");
//TODO: Create an Engineer class that extends the Employee class and represents the attributes and functional behaviors of engineers, such as role and  github.
class Engineer extends Employee {
  //Constructor function needs name, email, id and hitgub profile URL.
  constructor({ name, id, email, github }) {
    // name, id, and email are inherited from Employee class:
    super({ name, id, email });
    //Accesses user input for github profile for this instance of the engineer class:
    this.github = github;
    // Defines the role for this class:
    this.role = Engineer;
  }

  // The getGithub method retrieves the user input for the github profile URL for the engineer class.
  getGithub() {
    return this.github;
  }

  // The getRole method returns the role of instances of this class.
  getRole() {
    return this.role;
  }

  // printInfo() {
  //   console.log(`name: ${this.name}`);
  //   console.log(`id: ${this.id}`);
  //   console.log(`email: ${this.email}`);
  // }
}

// Exporting the engineer module to be accessed.
module.exports = Engineer;
