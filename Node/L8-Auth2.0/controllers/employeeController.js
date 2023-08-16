const Employees = require('../models/Employee');
const bcrypt = require('bcrypt');
const { getDocs, collection } = require('firebase/firestore');
const { db, storage } = require('../firebase');
const { ref, uploadBytes } = require('firebase/storage');
const multer = require('multer');
const employeesController = {
  async getEmployees(req, res) {
    try {
      // console.log(req.session);
      // const data = await Employees.find().select('-__v -admin -password')
      const query = await getDocs(collection(db, 'employee'));
      const data = [];
      query.forEach(doc => {
        data.push(doc.data());
      });
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
    const upload = multer();
    upload.single('picture')(req, res, async () => {
      const user = Employees.findOne({ id: 'asjkdaskhd' });
      try {
        const imageRef = ref(storage, `images/${user.id}`);
        await uploadBytes(imageRef, req.file.buffer);
        res.json({ message: 'File Uploaded' });
      } catch (err) {
        res.json(err);
      }
    });
  },
};

module.exports = employeesController;
