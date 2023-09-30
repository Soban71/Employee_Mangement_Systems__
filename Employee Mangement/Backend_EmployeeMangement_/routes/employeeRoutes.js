const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.js');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Replace with your secret key
const authenticateToken = require('../Middleware/authMiddleware.js'); // Import the authentication middleware

// Create an employee
router.post('/', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Check if an email already exists
router.post('/check-email', async (req, res) => {
  try {
    const existingEmployee = await Employee.findOne({ email: req.body.email });
    if (existingEmployee) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(201).json({ message: 'Email is available' });
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get all employees
router.get('/GetEmployees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employee data:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Delete an employee by ID
router.delete('/:employeeId', async (req, res) => {
  try {
    const { employeeId } = req.params;
    const deletedEmployee = await Employee.findByIdAndRemove(employeeId);

    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ message: 'An error occurred while deleting the employee' });
  }
});

// Login route: Create an employee and generate a JWT token
// Login route: Find an employee by email and check the password
router.post('/loginJwt', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await Employee.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ email: user.email, name: user.name }, SECRET_KEY);

    res.status(200).json({ token, name: user.name });

  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});



//Total Employee
router.get('/totalEmployees', async (req, res) => {
  try {
    const employeeCount = await Employee.countDocuments({
      role: { $in: ['assignment' , 'engineer'] },
    });
    res.json({ totalEmployees: employeeCount });
  } catch (error) {
    console.error('Error fetching total employees:', error);
    res.status(500).json({ error: 'Error fetching total employees' });
  }
});



module.exports = router;
