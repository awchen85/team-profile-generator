const Employee = require("../lib/Employee.js");

test("return employee name", () => {
    const employee = new Employee('Bob');
    expect(employee.name).toBe('Bob');
});

test("return emplyees id", () => {
const employee = new Employee("Bob", "001");
expect(employee.id).toBe("001");
});

test("return emplyees email", () => {
    const employee = new Employee("Bob", "001", "bob@gmail.com");
    expect(employee.email).toBe("bob@gmail.com");
    });
test("return emplyees role", () => {
    const employee = new Employee("Bob", "001", "bob@gmail.com", "employee");
    expect(employee.role).toBe("employee");
    });

test("fetch emplyee name via getName", () => {
    const employee = new Employee("Bob");
    expect(employee.getName()).toBe("Bob");
});
test("fetches employee id via getID", () => {
    const employee = new Employee("Bob", "001");
    expect(employee.getID()).toBe("001");
});
test("fetches employee email via getEmail", () => {
    const employee = new Employee("Bob", "001", "bob@gmail.com");
    expect(employee.getEmail()).toBe("bob@gmail.com");
});
test("fetches employee role via getRole", () => {
    const employee = new Employee("Bob", "001", "bob@gmail.com", "employee");
    expect(employee.getRole()).toBe("employee");
});
