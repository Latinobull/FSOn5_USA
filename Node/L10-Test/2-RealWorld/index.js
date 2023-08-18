const Employees = require('./models/Employee');
const db = require('./config');

const databaseControllers = {
//   async getEmployee() {
//     try {
//       const users = await Employees.find();
//       return users;
//     } catch (err) {
//       return err;
//     }
//   },
//   async createEmployee(data) {
//     try {
//       await Employees.create(data);
//       return 'User was added';
//     } catch (err) {
//       return err;
//     }
//   },
//   async updateEmployee(oldEmail, newEmail) {
//     const user = await Employees.findOneAndUpdate(
//       { email: oldEmail },
//       { email: newEmail },
//       { new: true }
//     );
//     return user.email;
//   },
//   async deleteEmployee(email) {
//     try {
//       await Employees.findOneAndDelete({ email: email });
//       console.log('User was deleted');
//     } catch (err) {
//       return err;
//     }
//   },
//   async startDB() {
//     try {
//       db.once('open', () => {
//         console.log('Database connected');
//       });
//       return;
//     } catch (err) {
//       return err;
//     }
//   },
//   closeDB() {
//     db.close();
//   },
//   async emptyDB() {
//     try {
//       await Employees.deleteMany({});
//     } catch (err) {
//       return err;
//     }
//   },
};

module.exports = databaseControllers;
