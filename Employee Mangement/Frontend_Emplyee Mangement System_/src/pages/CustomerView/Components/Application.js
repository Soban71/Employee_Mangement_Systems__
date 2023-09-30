import React, { useState } from 'react';
import '../AllcomponentDisplayer/style.css';
import { useNavigate } from 'react-router-dom';

export default function Application() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [leaveType, setLeaveType] = useState('');
  const [days, setDays] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('Pending');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const leaveTypes = ['Leaves', 'Holiday', 'Sick'];

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  const handleDaysChange = (e) => {
    setDays(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const backFunction = () => {
    navigate('/Header');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leaveData = {
      name,
      email,
      leaveType,
      days,
      reason,
      status,
      date,
    };

    try {
      const response = await fetch('http://localhost:5000/api/LeaveApplication/leave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leaveData),
      });

      if (response.ok) {
        setName('');
        setEmail('');
        setLeaveType('');
        setDays('');
        setReason('');
        setStatus('Pending');
        setDate('');
        alert('Leave application submitted successfully');
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the leave application');
    }
  };

  return (
    <>
      <section id="Blog-hero">
        <button className="back-button" onClick={backFunction}>
          <i className="fa fa-arrow-left" aria-hidden="true" /> Back
        </button>
        <h2>Leave Application</h2>
        <p>Stepping out of these office doors with excitement and anticipation for what's next</p>
      </section>
      <div className="application-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="form-group">
            <select value={leaveType} onChange={handleLeaveTypeChange} required>
              <option value="" disabled>
                Select Leave Type
              </option>
              {leaveTypes.map((leaveType) => (
                <option key={leaveType} value={leaveType}>
                  {leaveType}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Number of days"
              value={days}
              onChange={handleDaysChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Reason for leave"
              value={reason}
              onChange={handleReasonChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
