const Engineer = require('../lib/Engineer');

test('Can instantiate Engineer instance', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe("object");

});

test("Checks creation of user's github", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const github = "github.com/davesmith"
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.github).toEqual(expect.any(String));
});

test("Checks getGitHub()", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const github = "github.com/davesmith"
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getGithub()).toBe(github);
});

test("Checks employee's role", () => {
    const name = "Dave";
    const id = 1234;
    const email = "dave@gmail.com";
    const github = "github.com/davesmith";
    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getRole()).toBe("Engineer");
});

// challenge requirements
    // inherit all properties and methods from Employee plus...
    // github // GitHub username x
    // getGithub() x
    // getRole() // Overidden to return Engineer x