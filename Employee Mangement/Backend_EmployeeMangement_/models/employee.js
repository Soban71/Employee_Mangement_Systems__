const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  userName: String,
  city: String,
  userAddress: String,
  role: String,
  phone: String,
  email: {
    type: String,
    unique: true,
  },
  password: String, 

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
