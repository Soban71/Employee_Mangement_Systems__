const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT =  5000;


app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURL = process.env.MONGO_URL;
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });



// Define API routes
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes);

//Leave Api routes
const LeaveRoutes=require('./routes/leaveApplicationRoutes')
app.use('/api/LeaveApplication',LeaveRoutes);


//Events Api
const eventRoutes = require('./routes/Events')
app.use('/api/events', eventRoutes);




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
