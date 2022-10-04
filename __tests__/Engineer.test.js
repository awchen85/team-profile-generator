const Engineer = require('../lib/Engineer');


test("sets github from constructor", () => {
    const employee = new Engineer("Bob", "001", "bob@gmail.com", "bobbyboi");
    expect(employee.github).toBe("bobbyboi");
});

test ("fetch github from getGithub", () => {
    const employee = new Engineer("Bob", "001", "bob@gmail.com", "bobbyboi");
    expect(employee.getGithub()).toBe("bobbyboi");
});

test ("fetch employees role from getRole", () => {
    const employee = new Engineer("Bob", "001", "bob@gmail.com", "bobbyboi");
    expect(employee.getRole()).toBe("Engineer");
});