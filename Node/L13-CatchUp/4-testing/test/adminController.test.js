const adminControllers = require('../controllers/adminController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

jest.mock('../models/Admin');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

const req = {
  body: { email: 'test@email.com', password: 'abc123' },
  session: {},
};
const res = { json: jest.fn() };
describe('SignUp Controller', () => {
  test('should create a new admin and return a token', async () => {
    bcrypt.hash.mockResolvedValue('hashPassword');
    jwt.sign.mockReturnValue('generatedToken');

    const newAdmin = {
      email: 'test@email.com',
      password: 'hashPassword',
      token: 'generatedToken',
    };

    const createSpy = jest.spyOn(require('../models/Admin'), 'create');
    createSpy.mockResolvedValue(newAdmin);

    await adminControllers.signup(req, res);
    expect(bcrypt.hash).toHaveBeenCalledWith('abc123', 10);
    expect(jwt.sign).toHaveBeenCalledWith(
      {
        email: 'test@email.com',
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    expect(createSpy).toHaveBeenCalledWith({
      email: 'test@email.com',
      password: 'hashPassword',
      token: 'generatedToken',
    });
    expect(req.session.userToken).toBe('generatedToken');
    expect(res.json).toHaveBeenCalledWith({ token: 'generatedToken' });
  });
});
