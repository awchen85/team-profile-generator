const Engineer = require('../lib/Engineer');


test("sets github from constructor", () => {
    const employee = new Engineer("Bob", "001", "bob@gmail.com", "bobbyboi");
    expect(employee.github).toBe("bobbyboi");
});