//TODO: Create a base Employee class that represents the common attributes and behaviors of all employees, such as name, id, and email.
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  printInfo() {
    console.log(`name: ${this.name}`);
    console.log(`id: ${this.id}`);
    console.log(`email: ${this.email}`);
  }
}

module.exports = Employee;
