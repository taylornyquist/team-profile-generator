const inquirer = require("inquirer");
const fs = require("fs");

const generateHtml = require('./src/template.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { generateKeyPair } = require("crypto");

let teamArray = [];

function init() {

    console.log(`
        ============================================
        Welcome to the Team Profile Generator!
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
            // console.log(managerData);
            const manager = new Manager(
                managerData.managerName,
                managerData.managerId,
                managerData.managerEmail,
                managerData.managerOfficeNumber);
            teamArray.push(manager);
            // console.log(teamArray);
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
                        // console.log(engineerData);
                        const engineer = new Engineer(
                            engineerData.engineerName,
                            engineerData.engineerId,
                            engineerData.engineerEmail,
                            engineerData.engineerGithub);
                        teamArray.push(engineer);
                        // console.log(teamArray);
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
                        // console.log(internData);
                        const intern = new Intern(
                            internData.internName,
                            internData.internId,
                            internData.internEmail,
                            internData.internSchool);
                        teamArray.push(intern);
                        // console.log(teamArray);
                        promptTeamMember();
                    });

            } else if (newTeamMember.teamRole === "I don't want to add any more team members") {
                console.log("Finished adding team members!");
                // console.log(teamArray);
                sortTeamArray(teamArray);
                // generatePage(teamArray);
            };
        });
};

// do something with teh teamArray data.  Filter, Map, Sort whatever and then input it into the template literal.
// const mockTeamArray = [
//     Manager {
//       name: 'Bob',
//       id: '1',
//       email: 'bob@email.com',
//       officeNumber: '11'
//     },
//     Engineer {
//       name: 'Joe',
//       id: '2',
//       email: 'joe@email.com',
//       github: 'joejoe45'
//     },
//     Intern {
//       name: 'Suzy',
//       id: '3',
//       email: 'suzy@email.com',
//       school: 'Harvard Yard'
//     }
// ];

function generateManager(manager) {
    return `
    <div class="card my-3 mx-2 employee-card" style="width: 18rem;">
        <div class="card-header">
            <h3>${manager.getName()}</h3>
            <h5><i class="fa fa-coffee" aria-hidden="true"></i> ${manager.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a>
            </li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>`
};

function generateEngineer(engineer) {
    return `
    <div class="card my-3 mx-2 employee-card" style="width: 18rem;">
        <div class="card-header">
            <h3>${engineer.getName()}</h3>
            <h5><i class="fa fa-microchip" aria-hidden="true"></i> ${engineer.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank"> ${engineer.getGithub()}</a></li>
        </ul>
    </div>`
};

function generateIntern(intern) {
    return `
    <div class="card my-3 mx-2 employee-card" style="width: 18rem;">
        <div class="card-header">
            <h3>${intern.getName()}</h3>
            <h5><i class="fa fa-graduation-cap" aria-hidden="true"></i> ${intern.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>`
};


function sortTeamArray(teamArray) {
    let html = [];

    html.push(teamArray
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );

    html.push(teamArray
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("") 
    );

    html.push(teamArray
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("") 
    );

    html = html.join("");
    // console.log(html);
    generatePage(html);
    // return html.join("");

};


function generatePage(html) {
    fs.writeFile('./dist/index.html', generateHtml(html), (err) => {
        if (err) throw err;
        console.log("File Saved!");
    })

}




init()