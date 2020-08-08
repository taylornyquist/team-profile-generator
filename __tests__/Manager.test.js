const Manager = require('../lib/Manager');

test('Can instantiate Manager instance', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe("object");

});

test('Checks creation of office number', () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const officeNumber = 55
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Checks employee's role", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const officeNumber = 55
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getRole()).toBe("Manager");
});

// challenge requirements
    // inherit all properties and methods from Employee plus...
    // officeNumber
    // getRole() // Overidden to return Manager