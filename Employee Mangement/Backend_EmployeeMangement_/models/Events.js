const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  date: Date,
  eventName: String,
  organizingCompany: String,
  eventImage: Buffer, // Store image data as Buffer
  registrationLink: String,
  description: String,
});

module.exports = mongoose.model('Event', eventSchema);


