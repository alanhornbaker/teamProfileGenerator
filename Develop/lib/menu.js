//TODO: Create a Menu class that displays the menu of options for adding new team members and handles user input.
class Menu {
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

module.exports = Menu;
