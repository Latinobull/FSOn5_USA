const Employees = require('../models/Employee');
const multer = require('multer');
const fs = require('fs').promises;
const path = require('path');
const uploadPath = path.join(process.cwd(), 'upload'); //check/ validation folder
const imagesPath = path.join(process.cwd(), 'images'); // storing/resting place for the files
console.log(imagesPath);
const employeesController = {
  async getEmployees(req, res) {
    try {
      const data = await Employees.find().select('-__v -admin -password');
      res.json(data);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async createEmployee(req, res) {
    try {
      const newEmployee = await Employees.create(req.body);
      res.json(newEmployee);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async getSingleEmployee(req, res) {
    try {
      const employee = await Employees.findOne({ _id: req.params.id }).select(
        '-__v -admin -_id'
      );
      res.json(employee);
    } catch (err) {
      console.log(err);
      res.json({ message: `${req.params.id} is not a valid ID` });
    }
  },
  async deleteEmployee(req, res) {
    try {
      await Employees.findOneAndDelete({ _id: req.params.id });
      res.json('Employee was deleted');
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async updateEmployee(req, res) {
    try {
      const updatedEmployee = await Employees.findOneAndUpdate(
        //* Where are we updating
        {
          _id: req.params.id,
        },
        // * What is the new data
        {
          $set: req.body,
        },
        // * Always return the latest change
        {
          new: true,
        }
      ).select('-__v -admin -_id');
      res.status(200).json(updatedEmployee);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async uploadFile(req, res) {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadPath);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });

    const upload = multer({
      storage: storage,
      limits: {
        fileSize: 1048576, //1MB
      },
    });

    const user = await Employees.findOne({ _id: '64cc4444cc3a543fdc662509' });
    upload.single('picture')(req, res, async function (err) {
      const { path: tempName } = req.file;
      // path.join(directory, name of file)
      const fileName = path.join(imagesPath, user.id + '.jpg');
      await fs.rename(tempName, fileName);
      res.json(req.file);
    });
  },
};

module.exports = employeesController;
