jest.mock('../lib/Employee.js');

const Employee = require('../lib/Employee');

test("return employee name", () => {
    const employee = new Employee("Bob");
    expect(employee.name).toBe("Bob");
});

test ("return emplyees ID", () => {
const employee = new Employee("Bob", "001");
expect(employee.ID).tobe("001");
});

test ("return emplyees email", () => {
    const employee = new Employee("Bob", "001", "bob@gmail.com");
    expect(employee.email).tobe("bob@gmail.com");
    });
test ("return emplyees role", () => {
    const employee = new Employee("Bob", "001", "bob@gmail.com", "employee");
    expect(employee.role).tobe("employee");
    });

test("fetch emplyee name via getName", () => {
    const employee = new Employee("Bob");
    expect(employee.getName()).toBe("Bob");
});
