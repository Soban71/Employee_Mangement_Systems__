const mongoose = require('mongoose');

const LeaveApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  leaveType: String,
  days: Number,
  reason: String,
  status: String, // Add the status field
  date: Date,     // Add the date field
});

const LeaveApplication = mongoose.model('LeaveApplication', LeaveApplicationSchema);
module.exports = LeaveApplication;
