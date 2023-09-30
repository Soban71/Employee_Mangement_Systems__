import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Headers() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Retrieve the user's email from local storage
    const email = localStorage.getItem('email');
    if (email) {
      setUserEmail(email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/Login');
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <div className="container-fluid">
        <Navbar.Brand>
          <img
            src="http://wahabali.com/work/empor/images/logo.png"
            alt=""
            height="30"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="mx-auto">
            <Link className="nav-link" to="">
              Home
            </Link>
            <Link className="nav-link" to="/UpcomingEvents">
              Events
            </Link>
            <Link className="nav-link" to="/Application">
              Application
            </Link>
            <Link className="nav-link" onClick={handleLogout}>
              Logout
            </Link>
          </Nav>
          <span>{userEmail ? `Welcome, ${userEmail}` : ''}</span>
         
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Headers;
