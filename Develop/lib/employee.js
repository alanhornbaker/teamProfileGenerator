//TODO: Create a base Employee class that represents the common attributes and behaviors of all employees, such as name, id, and email.
class Employee {
  //Constructor function to create a blueprint object for the employee class, which will have name, id, and email values.
  constructor({ name, id, email, role }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = employee;
  }

  // The getName method retrieves the user-inputted name for the employee class.
  getName() {
    return this.name;
  }

  // The getId method retrieves the user-inputted Id for the employee class.
  getId() {
    return this.id;
  }

  // The getEmail method retrieves the user-inputted email for the employee class.
  getEmail() {
    return this.email;
  }

  // The getRole method should return the role of "Employee", and this should be overwritten by the getRole methods in the subclasses:
  getRole() {
    return this.role;
  }

  // printInfo() {
  //   console.log(`name: ${this.name}`);
  //   console.log(`id: ${this.id}`);
  //   console.log(`email: ${this.email}`);
  // }
}

// Exporting the employee module to be accessed by the specific role classes and generate html.
module.exports = Employee;
