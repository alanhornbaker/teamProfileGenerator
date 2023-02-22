# Team Profile Generator

## Table of Contents

1.[Description and Purpose](#description)

2.[Installation](#installation)

3.[Usage](#usage)

4.[Contribution](#contribution)

5.[License](#license)

6.[Questions](#questions)

## Description

The Team Profile Generator is a command-line application that takes in information about members of a development team and generates an HTML webpage that displays summaries for each person.

The purpose of the application is to quickly generate a team profile page via prompts, without having to write any vanilla code.

## Installation

You can install this application by forking the repository from github.com/alanhornbaker/teamProfileGenerator and opening the repository in your text editor. You will also want the LTS version of NPM so the node works.

## Usage

Functions that you will use to to use the application once you have installed it:
constructor functions, prototypes, promises, test.js files, class, subclasses, etc.

## Contribution

You can contribute to this application by opening a pull request at github.com/alanhornbaker/teamProfileGenerator. Currently there are no rules or standards for contribution.

## License

SOME LICENSE

## Questions

Known erros and other issues can be raised to the repository on github at github.com/alanhornbaker/teamProfileGenerator , or can be sent to my github profile at github.com/alanhornbaker. As last resort, questions can be emailed to me directly at alanhornbaker@gmail.com

## User Story

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an Intern or an intern or to finish building my team

WHEN I select the Intern option
THEN I am prompted to enter the Intern’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Mock Up Example

![Example Image](../teamProfileGenerator/Develop/images/mockUp.png)
