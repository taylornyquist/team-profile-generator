const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call parent constructor here:
        super(name, id, email);

        this.github = github;
    };

    getGithub () {
        return this.github;
    };

    getRole () {
        return "Engineer";
    };

};

module.exports = Engineer;

// challenge requirements
    // inherit all properties and methods from Employee plus...
    // github // GitHub username x
    // getGithub() x
    // getRole() // Overidden to return Engineer x