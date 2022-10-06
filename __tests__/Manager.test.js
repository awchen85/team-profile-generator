const Manager = require('../lib/Manager');


test('sets office number using constructor', () => {
    const employee = new Manager("Bob", "001", "bob@gmail.com", "555-555-5555");
    expect(employee.officeNumber).toBe("555-555-5555");
});

test("fetch office number from getOfficeNumber", () => {
    const employee = new Manager("Bob", "001", "bob@gmail.com", "555-555-5555");
    expect(employee.getOfficeNumber()).toBe("555-555-5555");
});

test ("fetch employees role from getRole", () => {
    const employee = new Manager("Bob", "001", "bob@gmail.com", "555-555-5555");
    expect(employee.getRole()).toBe("Manager");
});

test("fetch employee id from getId from employee super", () => {
    const employee = new Manager("Bob", "001", "bob@gmail.com", "555-555-5555");
    expect(employee.getId()).toBe("001");
});