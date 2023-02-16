//TODO:
//TODO: Create a EmailService class that handles opening the user's default email program and populating the TO field of the email with the email address.
class EmailService {
  constructor() {
    this.defaultEmailProgram = "mailto:";
  }

  openEmailClient(emailAddress) {
    const emailUrl = `${this.defaultEmailProgram}${emailAddress}`;
    window.open(emailUrl, "_blank");
  }
}
// Here's a brief explanation of the code:

// The EmailService class is defined with a constructor that sets the defaultEmailProgram property to 'mailto:'. This string specifies the default email program that will be used to open the email client.
// The openEmailClient method takes an emailAddress parameter and uses it to construct a mailto URL, which is opened in a new browser window using the window.open method.
// To use this EmailService class in your application, you can create an instance of the class and call the openEmailClient method with the email address that you want to populate in the TO field of the email. For example:
const emailService = new EmailService();

// Prompt the user for an email address and then open the default email client with the address populated in the TO field
const emailAddress = prompt("Enter an email address:");
emailService.openEmailClient(emailAddress);
// This will open the user's default email program with the email address that they entered in the TO field.
