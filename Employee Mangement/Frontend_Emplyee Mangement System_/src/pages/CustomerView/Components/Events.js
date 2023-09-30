import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../AllcomponentDisplayer/style.css';
import { useNavigate } from 'react-router-dom';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate();

  const backFunction = () => {
    navigate('/Header');
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events/allEvents');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchEvents();
  }, []);

  const convertBinDataToDataURL = (binData) => {
    // Assuming your BinData is stored as a base64-encoded string
    return `data:image/jpeg;base64,${binData}`;
  };

  return (
    <>
      <section id="Event-hero">
        <button className="back-button" onClick={backFunction}>
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>
        <h2>Upcoming Events</h2>
      </section>

      <section className="events-container">
        {loading && <div className="loader">Loading...</div>}
        {!loading &&
          events.map((event) => (
            <div key={event._id} className="event-card">
              <img
                src={convertBinDataToDataURL(event.eventImage)}
                alt={event.eventName}
              />
              <div className="event-details">
                <h3>{event.eventName}</h3>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
                <p>Organizer: {event.organizingCompany}</p>
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
