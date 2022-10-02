const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager', () => {
    const employee = new Manager('Bob');

    expect(employee.name).toBe('Bob');
    expect(employee.ID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(Object));
    expect(employee.role).toEqual(expect.any(Number));

});
