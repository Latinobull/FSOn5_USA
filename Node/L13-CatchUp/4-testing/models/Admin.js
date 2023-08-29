const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
});

AdminSchema.methods.checkPassword = async function(loginPW){
    return bcrypt.compare(loginPW, this.password)
}

const Admin = model('admins', AdminSchema);

module.exports = Admin;
