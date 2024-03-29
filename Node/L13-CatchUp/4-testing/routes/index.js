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
const auth = require('../utils/auth');

router.route('/').get(getEmployees).post(auth, createEmployee);
router
  .route('/:id')
  .get(auth, getSingleEmployee)
  .put(auth, updateEmployee)
  .delete(auth, deleteEmployee);

router.route('/admin/login').post(login);
router.route('/admin/signup').post(signup);
router.route('/admin/logout').post(logout);
router.route('/upload').post(uploadFile);
module.exports = router;
