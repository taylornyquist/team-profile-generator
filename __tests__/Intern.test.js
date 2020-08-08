const Intern = require('../lib/Intern');

test('Can instantiate Intern instance', () => {
    const intern = new Intern();

    expect(typeof(intern)).toBe("object");

});

test("Checks creation of user's school", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const school = "Harvard"
    const intern = new Intern(name, id, email, school);

    expect(intern.school).toEqual(expect.any(String));
});

test("Checks getGitHub()", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const school = "Harvard"
    const intern = new Intern(name, id, email, school);

    expect(intern.getSchool()).toBe(school);
});

test("Checks employee's role", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const school = "Harvard";
    const intern = new Intern(name, id, email, school);

    expect(intern.getRole()).toBe("Intern");
});

// challenge requirements
    // inherit all properties and methods from Employee plus...
    // school x
    // getSchool() x
    // getRole() // Overidden to return Intern x