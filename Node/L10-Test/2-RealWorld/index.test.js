const {
  getEmployee,
  startDB,
  closeDB,
  createEmployee,
  emptyDB,
  updateEmployee,
  deleteEmployee,
} = require('.');

describe('MONGODB CRUB SUITES', () => {
  beforeAll(async () => {
    await startDB();
  });
  afterAll(async () => {
    await emptyDB();
    closeDB();
  });

  test('Should be able to create an employee', async () => {
    const employeeData = {
      firstname: 'John',
      lastname: 'Doe',
      email: 'JohnDoe@email.com',
      password: 'qekjdadsfd',
    };
    const result = await createEmployee(employeeData);
    expect(result).toBe('User was added');
  });
  test('Should be able to get an employee', async () => {
    const result = await getEmployee();
    expect(result.length).toBe(1);
  });
  test('Should be able to update the employee by email and change the email to a new one', async () => {
    const result = await updateEmployee(
      'JohnDoe@email.com',
      'JaneDoe@gmail.com'
    );
    expect(result).toBe('JaneDoe@gmail.com');
  });
  test('Should be able to delete a user by their email', async () => {
    await deleteEmployee('JaneDoe@gmail.com');
    const result = await getEmployee();
    expect(result.length).toBe(0);
  });
});
