const router = require('express').Router();
const {
  getEmployees,
  createEmployee,
  getSingleEmployee,
  deleteEmployee,
  updateEmployee,
} = require('../controllers/employeeController');

router.route('/').get(getEmployees).post(createEmployee);
router
  .route('/:id')
  .get(getSingleEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
