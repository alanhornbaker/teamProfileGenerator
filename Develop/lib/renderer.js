// fs is imported:
const fs = require("fs");

// The path is imported:
const path = require("path");

// The templates directory is imported:
const templatesDir = path.resolve(__dirname, "./templates");

// Generate html funciton takes in the employee array:
const generateHTML = (employees) => {
  // html is declared as an empty array:
  const HTML = [];

  // The objects in the employees array will be filtered by role and the corresponding function will be used to create an emplotee of that type:
  // All of these objects are then pushed to the HTML array:
  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  er;
  HTML.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  // console.log(HTML, "GenerateHTML.js");

  // The object in the html array are then joined and passed into the render full markdown function:
  return renderFullMarkdown(HTML.join(""));
};

// The rendermanager function takes int he new instance of the manager class:
const renderManager = (manager) => {
  // The manager html template file is read to create the manage html markdown with the user input:
  let template = fs.readFileSync(
    path.resolve(templatesDir, "manager.html"),
    "utf8"
  );

  // Changes placeholders in manager.html file with actual user input values for the name, id, role, email, and office number keys in the manager object:
  template = replaceTemplates(template, "name", manager.getName());
  template = replaceTemplates(template, "id", manager.getId());
  template = replaceTemplates(template, "role", manager.getRole());
  template = replaceTemplates(template, "email", manager.getEmail());
  template = replaceTemplates(
    template,
    "officeNumber",
    manager.getOfficeNumber()
  );

  // The updated template is returned:
  return template;
};

const renderEngineer = (engineer) => {
  // The engineer html template file is read to create the engineer html markdown with the user input:
  let template = fs.readFileSync(
    path.resolve(templatesDir, "engineer.html"),
    "utf8"
  );

  // Changes placeholders in manager.html file with actual user input values for the name, id, role, email, and office number keys in the manager object:
  template = replaceTemplates(template, "name", engineer.getName());
  template = replaceTemplates(template, "id", engineer.getId());
  template = replaceTemplates(template, "role", engineer.getRole());
  template = replaceTemplates(template, "email", engineer.getEmail());
  template = replaceTemplates(template, "github", engineer.getGithub());

  // The updated template is returned:
  return template;
};

// The render intern function takes in the new instance of the intern class:
const renderIntern = (intern) => {
  // The engineer html template file is read to create the engineer html markdown with the user input:
  let template = fs.readFileSync(
    path.resolve(templatesDir, "intern.html"),
    "utf8"
  );

  // Changes placeholders in manager.html file with actual user input values for the name, id, role, email, and office number keys in the manager object:
  template = replaceTemplates(template, "name", intern.getName());
  template = replaceTemplates(template, "id", intern.getId());
  template = replaceTemplates(template, "role", intern.getRole());
  template = replaceTemplates(template, "email", intern.getEmail());
  template = replaceTemplates(template, "school", school.getSchool());

  // The updated template is returned:
  return template;
};

// Render full markdown function has HTML passed in:
const renderFullMarkdown = (HTML) => {
  // The full markdown html file is accessed:
  let template = fs.readFileSync(
    path.resolve(templatesDir, "full-markdown.html"),
    "utf8"
  );

  // The replace templates function is returned, taking in the template, team, and HTML to update the markdown file:
  return replaceTemplates(template, "team", HTML);
};
