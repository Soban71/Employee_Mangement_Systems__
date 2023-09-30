import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  Stack,
  IconButton, // Import IconButton for the delete icon
} from '@mui/material';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';

export default function UserPage() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // Fetch employee data from the server
    axios.get('http://localhost:5000/api/employees/GetEmployees')
      .then((response) => {
        console.log('Response:', response); // Log the response
        setEmployeeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error); // Log the error
      });
  }, []);

  // Function to handle employee deletion
  const handleDeleteEmployee = (employeeId) => {
    // Send a DELETE request to your server to delete the employee
    axios.delete(`http://localhost:5000/api/employees/${employeeId}`)
      .then((response) => {
        console.log('Employee deleted:', response);
        // Remove the deleted employee from the local state
        setEmployeeData((prevData) =>
          prevData.filter((employee) => employee._id !== employeeId)
        );
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Employee Section
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New User
          </Button>
        </Stack>

        <Card>
          {/* Display employee data in a table */}
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Action</TableCell> {/* Add a column for delete action */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employeeData.map((employee) => (
                    <TableRow key={employee._id}>
                      <TableCell>{employee.userName}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.phone}</TableCell>
                      <TableCell>{employee.userAddress}</TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>{employee.city}</TableCell>
                      <TableCell>{employee.password}</TableCell>
                      <TableCell>
                        <IconButton
                          color="error"
                          onClick={() => handleDeleteEmployee(employee._id)}
                        >
                          <Iconify icon="eva:trash-2-outline" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </>
  );
}
