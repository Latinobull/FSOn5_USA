const router = require('express').Router();
const { signup, login, logout } = require('../controllers/adminController');
const {
  getEmployees,
  createEmployee,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
  uploadFile,
} = require('../controllers/employeeController');
const authMiddleware = require('../utils/authMiddleware');

router.route('/').get(getEmployees).post(authMiddleware, createEmployee);
router
  .route('/:id')
  .get(authMiddleware, getSingleEmployee)
  .put(authMiddleware, updateEmployee)
  .delete(authMiddleware, deleteEmployee);

router.route('/admin/login').post(login);
router.route('/admin/signup').post(signup);
router.route('/admin/logout').post(logout);
router.route('/upload').post(uploadFile);
module.exports = router;
