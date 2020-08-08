const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);

        this.officeNumber = officeNumber;
    };

    getRole () {
        return "Manager";
    };

};

module.exports = Manager;





// challenge requirements
    // inherit all properties and methods from Employee plus...
    // officeNumber
    // getRole() // Overidden to return Manager