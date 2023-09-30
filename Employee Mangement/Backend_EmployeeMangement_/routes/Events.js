const express = require('express');
const router = express.Router();
const Event = require('../models/Events');
const multer = require('multer');



const storage = multer.memoryStorage();
const upload = multer({ storage });
// POST: Create a new event
router.post('/posting', upload.single('eventImage'), async (req, res) => {
  try {
    const { date, eventName, organizingCompany, registrationLink, description } = req.body;
    const eventImage = req.file.buffer; 

    const newEvent = new Event({
      date,
      eventName,
      organizingCompany,
      eventImage,
      registrationLink,
      description,
    });

    await newEvent.save();

    res.status(201).json({ message: 'Event data has been successfully saved.' });
  } catch (error) {
    console.error('An error occurred while saving event data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/allEvents', async (req, res) => {
  try {
    const events = await Event.find();
    const eventsWithBase64Images = events.map(event => ({
      ...event._doc,
      eventImage: event.eventImage.toString('base64'),
    }));
    res.json(eventsWithBase64Images);
  } catch (error) {
    console.error('Error Fetching Events:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
