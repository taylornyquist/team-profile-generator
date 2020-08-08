const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);

        this.school = school;
    };

    getSchool () {
        return this.school;
    };

    getRole () {
        return "Intern";
    };

};

module.exports = Intern;

// challenge requirements
    // inherit all properties and methods from Employee plus...
    // school
    // getSchool()
    // getRole() // Overidden to return Intern