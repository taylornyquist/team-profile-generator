const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");

});

test('Checks employee name, id and email', () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const employee = new Employee(name, id, email);
  

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
});

test('Checks name creation via getName()', () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const employee = new Employee(name, id, email);

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Checks id creation via getId()', () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const employee = new Employee(name, id, email);

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('Checks email creation via getEmail()', () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const employee = new Employee(name, id, email);

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("Checks employee's role", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const employee = new Employee(name, id, email);

    expect(employee.getRole()).toBe("Employee");
});


// challenge requirements
    // name x
    // id x
    // email x
    // getName() x
    // getId() x
    // getEmail() x
    // getRole() // Returns Employee