const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamArray = [];

function init() {

    console.log(`
        ============================================
        Welcocme to the Team Profile Gnerator!
        Follow the prompts below to build your team.
        ============================================
    `);

    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: managerName => {
                if (managerName) {
                    return true;
                } else {
                    return "Please enter the team manager's name!";
                }
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's ID number?",
            validate: managerId => {
                if (managerId > 0) {
                    return true;
                } else {
                    return "Please enter a number greater than 0!";
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email address?",
            validate: managerEmail => {
                if (managerEmail) {
                    return true;
                } else {
                    return "Please enter at least one character!";
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is the team manager's office number?",
            validate: managerOfficeNumber => {
                if (managerOfficeNumber > 0) {
                    return true;
                } else {
                    return "Please enter a number greater than 0!";
                }
            }
        },
    ])
        .then(managerData => {
            console.log(managerData);
            const manager = new Manager(
                managerData.managerName,
                managerData.managerId,
                managerData.managerEmail,
                managerData.managerOfficeNumber);
            teamArray.push(manager);
            console.log(teamArray);
            promptTeamMember();
        });
};

function promptTeamMember() {

    console.log(`
        ===========================
        Next, Add a New Team Member
        ===========================
    `);

    inquirer.prompt([
        {
            type: 'list',
            name: 'teamRole',
            message: "What is the team member's role?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        },
    ])
        .then(newTeamMember => {
            if (newTeamMember.teamRole === "Engineer") {
                console.log("New Engineer Added");

                inquirer.prompt([  //prompts: name, id, email, github
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: "What is the engineer's name?",
                        validate: engineerName => {
                            if (engineerName) {
                                return true;
                            } else {
                                return "Please enter at least one character!";
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'engineerId',
                        message: "What is the engineer's ID number?",
                        validate: engineerId => {
                            if (engineerId > 0) {
                                return true;
                            } else {
                                return "Please enter a number greater than 0!";
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'engineerEmail',
                        message: "What is the engineer's email address?",
                        validate: engineerEmail => {
                            if (engineerEmail) {
                                return true;
                            } else {
                                return "Please enter at least one character!";
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'engineerGithub',
                        message: "What is the engineer's GitHub user name?",
                        validate: engineerGithub => {
                            if (engineerGithub) {
                                return true;
                            } else {
                                return "Please enter at least one character!";
                            }
                        }
                    },
                ])
                    .then(engineerData => {
                        console.log(engineerData);
                        const engineer = new Engineer(
                            engineerData.engineerName,
                            engineerData.engineerId,
                            engineerData.engineerEmail,
                            engineerData.engineerGithub);
                        teamArray.push(engineer);
                        console.log(teamArray);
                        promptTeamMember();
                    });

            } else if (newTeamMember.teamRole === "Intern") {
                console.log("New Intern Added");

                inquirer.prompt([  //prompts: name, id, email, school
                    {
                        type: 'input',
                        name: 'internName',
                        message: "What is the intern's name?",
                        validate: internName => {
                            if (internName) {
                                return true;
                            } else {
                                return "Please enter at least one character!";
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: "What is the intern's ID number?",
                        validate: internId => {
                            if (internId > 0) {
                                return true;
                            } else {
                                return "Please enter a number greater than 0!";
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: "What is the intern's email address?",
                        validate: internEmail => {
                            if (internEmail) {
                                return true;
                            } else {
                                return "Please enter at least one character!";
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: "What school does the intern attend?",
                        validate: internSchool => {
                            if (internSchool) {
                                return true;
                            } else {
                                return "Please enter at least one character!";
                            }
                        }
                    },
                ])
                    .then(internData => {
                        console.log(internData);
                        const intern = new Intern(
                            internData.internName,
                            internData.internId,
                            internData.internEmail,
                            internData.internSchool);
                        teamArray.push(intern);
                        console.log(teamArray);
                        promptTeamMember();
                    });

            } else if (newTeamMember.teamRole === "I don't want to add any more team members") {
                console.log("No new team member added");
                console.log(teamArray);
                return;   // send user somwhere next...


            };
        });
};










init();