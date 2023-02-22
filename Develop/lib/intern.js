// Importing the Employee parent class:
const Employee = require("./employee");
//TODO: Create an Intern class that extends the Employee class and represents the attributes and functional behaviors of interns, such as role and  school.
class Intern extends Employee {
  //Constructor function needs name, email, id and school.
  constructor({ name, id, email, school }) {
    // name, id, and email are inherited from Employee class:
    super({ name, id, email });
    //Accesses user input for school profile for this instance of the intern class:
    this.school = school;
    // Defines the role for this class:
    this.role = Intern;
  }

  // The getSchool method retrieves the user input for the school profile URL for the school class.
  getSchool() {
    return this.school;
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
module.exports = Intern;
