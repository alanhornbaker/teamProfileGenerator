// Importing the Employee parent class:
const Employee = require("./employee");
//TODO: Create an Manager class that extends the Employee class and represents the attributes and functional behaviors of engineers, such as role and office number.
class Manager extends Employee {
  //Constructor function needs name, email, id and hitgub profile URL.
  constructor({ name, id, email, officeNumber }) {
    // name, id, and email are inherited from Employee class:
    super({ name, id, email });
    //Accesses user input for officeNumber profile for this instance of the engineer class:
    this.officeNumber = officeNumber;
    // Defines the role for this class:
    this.role = Manager;
  }

  // The getOfficeNumber method retrieves the user input for the officeNumber for the engineer class.
  getOfficeNumber() {
    return this.officeNumber;
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
module.exports = Manager;
