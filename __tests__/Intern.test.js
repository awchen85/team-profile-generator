const Intern = require('../lib/Intern');


test('sets school using constructor', () => {
    const employee = new Intern("Bob", "001", "bob@gmail.com", "Hard Knocks");
    expect(employee.school).toBe("Hard Knocks");
});

test("fetch school from getSchool", () => {
    const employee = new Intern("Bob", "001", "bob@gmail.com", "Hard Knocks");
    expect(employee.getSchool()).toBe("Hard Knocks");
});

test ("fetch employees role from getRole", () => {
    const employee = new Intern("Bob", "001", "bob@gmail.com", "Hard Knocks");
    expect(employee.getRole()).toBe("Intern");
});

test("fetch employee id from getId from employee super", () => {
    const employee = new Intern("Bob", "001", "bob@gmail.com", "Hard Knocks");
    expect(employee.getId()).toBe("001");
});