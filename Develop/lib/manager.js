//TODO: Create a Manager subclass that extends Employee and adds an officeNumber attribute.
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
    this.name = name;
    this.id = id;
    this.email - email;
  }
}

module.exports = Manager;

// const rectangle = new Rectangle(12, 9);
// rectangle.printInfo();
