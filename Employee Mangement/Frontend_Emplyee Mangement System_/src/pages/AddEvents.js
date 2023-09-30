import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddEvents() {
  const [eventInfo, setEventInfo] = useState({
    date: '',
    eventName: '',
    organizingCompany: '',
    eventImage: null,
    registrationLink: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventInfo({ ...eventInfo, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEventInfo({ ...eventInfo, eventImage: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('date', eventInfo.date);
    formData.append('eventName', eventInfo.eventName);
    formData.append('organizingCompany', eventInfo.organizingCompany);
    formData.append('eventImage', eventInfo.eventImage); // Append the File object
    formData.append('registrationLink', eventInfo.registrationLink);
    formData.append('description', eventInfo.description);

    try {
      const response = await axios.post('http://localhost:5000/api/events/posting', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
      });

      if (response.status === 201) {
        console.log('Event data has been successfully saved.');
        toast.success('Event added successfully', {
          position: toast.POSITION.TOP_CENTER,
        });

        setEventInfo({
          date: '',
          eventName: '',
          organizingCompany: '',
          eventImage: null,
          registrationLink: '',
          description: '',
        });

      } else {
        console.error('Failed to save event data:', response.data);
      }
    } catch (error) {
      console.error('An error occurred while sending the request:', error);
    }
  };


  const formStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '25px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '25px', textAlign: 'center' }}>
        Add Events
      </h2>
      <ToastContainer />
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Event Date"
            style={inputStyle}
            type="date"
            name="date"
            id="date"
            value={eventInfo.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            placeholder="Event Name"
            style={inputStyle}
            type="text"
            name="eventName"
            id="eventName"
            value={eventInfo.eventName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            style={inputStyle}
            placeholder="Organizing Company if any other"
            type="text"
            name="organizingCompany"
            id="organizingCompany"
            value={eventInfo.organizingCompany}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <input
            style={inputStyle}
            type="file"
            name="eventImage"
            id="eventImage"
            accept="image/*" // Allow only image files
            onChange={handleImageChange} // Handle file input change
          />
        </div>
        <div>
          <input
            style={inputStyle}
            placeholder="Enter Event Registration Link(if required)"
            type="url"
            name="registrationLink"
            id="registrationLink"
            value={eventInfo.registrationLink}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <textarea
            style={inputStyle}
            placeholder="Event Descriptions"
            name="description"
            id="description"
            value={eventInfo.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
