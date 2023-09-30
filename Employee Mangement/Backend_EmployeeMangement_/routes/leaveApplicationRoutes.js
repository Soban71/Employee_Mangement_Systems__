const express = require('express');
const router = express.Router();
const LeaveApplication = require('../models/leaveApplication.js');

// POST route to submit a leave application
router.post('/leave', async (req, res) => {
  try {
    
    const { name, email, leaveType, days, reason, status, date } = req.body;

    
    const leaveApplication = new LeaveApplication({
      name,
      email,
      leaveType,
      days,
      reason,
      status,
      date,
    });

    // Save the leave application to the database
    await leaveApplication.save();
    res.json({ message: 'Leave application submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving leave application' });
  }
});

router.get('/getLeaves', async (req, res) => {
  try {
    const leaveApplications = await LeaveApplication.find();

    res.json(leaveApplications);
  } catch (error) {
    console.error('Error fetching leave data:', error);
    res.status(500).json({ error: 'An error occurred while fetching leave data' });
  }
});


router.put('/approve/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const leaveApplication = await LeaveApplication.findByIdAndUpdate(
      id,
      { status: 'Approved' },
      { new: true }
    );
    res.json(leaveApplication);
  } catch (error) {
    console.error('Error approving leave application:', error);
    res.status(500).json({ error: 'Error approving leave application' });
  }
});

router.put('/disapprove/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const leaveApplication = await LeaveApplication.findByIdAndUpdate(
      id,
      { status: 'Disapproved' },
      { new: true }
    );
    res.json(leaveApplication);
  } catch (error) {
    console.error('Error disapproving leave application:', error);
    res.status(500).json({ error: 'Error disapproving leave application' });
  }
});



router.get('/pending', async (req, res) => {
  try {
    const pendingLeaveApplications = await LeaveApplication.find({ status: 'Pending' });
    res.json(pendingLeaveApplications);
  } catch (error) {
    console.error('Error fetching pending leave applications:', error);
    res.status(500).json({ error: 'Error fetching pending leave applications' });
  }
});


module.exports = router;
