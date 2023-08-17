const { Schema, model } = require('mongoose');

const EmployeeSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 4,
    },
  }
  //! Syntax to remove version keys
  //   { versionKey: false }
);

const Employees = model('employees', EmployeeSchema);

module.exports = Employees;
