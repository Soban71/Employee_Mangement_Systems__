import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddEmployee() {
  const [formData, setFormData] = useState({
    userName: '',
    city: '',
    userAddress: '',
    role: '',
    phone: '',
    email: '',
    password: '', // Add a new field for password

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (formData.password.length < 6) {
      // Show an error toast for an invalid password
      toast.error('Password must be at least 6 characters long', {
        position: toast.POSITION.TOP_CENTER,
      });
      return; // Exit the function without submitting the form
    }
  
    try {
      const response = await axios.post(
        'http://localhost:5000/api/employees',
        formData
      );
  
      if (response.data.message === 'Email already exists') {
        // Show an error toast for duplicate email
        toast.error('Email already exists', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else if (response.data.message === 'Employee added successfully') {
        // Reset the form data
        setFormData({
          userName: '',
          city: '',
          userAddress: '',
          role: '',
          phone: '',
          email: '',
          password: '', // Reset the password field
        });
  
        // Show a success toast
        toast.success('Employee added successfully', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        // Show an error toast for other errors
        toast.error('Email Already exist or incorrect Data', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
  
      // Show an error toast for other errors
      toast.error('Email Already exist or incorrect Data', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Add Employee
      </Typography>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="User Name"
              variant="outlined"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              variant="outlined"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="User Address"
              variant="outlined"
              name="userAddress"
              value={formData.userAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Role</InputLabel>
              <Select
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <MenuItem value="assignment">Employee</MenuItem>
                <MenuItem value="engineer">Engineer</MenuItem>
                <MenuItem value="engineer">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: 25 }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

