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
  IconButton,
} from '@mui/material';

export default function LeaveRequest() {
  const [leaveData, setLeaveData] = useState([]);

  useEffect(() => {
    // Fetch leave data from the server
    axios.get('http://localhost:5000/api/LeaveApplication/getLeaves')
      .then((response) => {
        console.log('Response:', response.data); 
        setLeaveData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching leave data:', error); 
      });
  }, []);

  const handleApproval = (leaveId) => {
    axios.put(`http://localhost:5000/api/LeaveApplication/approve/${leaveId}`)
      .then((response) => {
        const updatedLeaveData = leaveData.map((leave) =>
          leave._id === leaveId ? { ...leave, status: 'Approved' } : leave
        );
        setLeaveData(updatedLeaveData);
      })
      .catch((error) => {
        console.error('Error approving leave application:', error);
      });
  };

  const handleDisapproval = (leaveId) => {
  
    axios.put(`http://localhost:5000/api/LeaveApplication/disapprove/${leaveId}`)
      .then((response) => {
        const updatedLeaveData = leaveData.map((leave) =>
          leave._id === leaveId ? { ...leave, status: 'Disapproved' } : leave
        );
        setLeaveData(updatedLeaveData);
      })
      .catch((error) => {
        console.error('Error disapproving leave application:', error);
      });
  };


  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Leave Requests
          </Typography>
        </Stack>

        <Card>
          {/* Display leave data in a table */}
          <TableContainer sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Leave Type</TableCell>
                  <TableCell>Days</TableCell>
                  <TableCell>Reason</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Approved</TableCell>
                  <TableCell>DisApproved</TableCell> {/* Add a new column for actions */}
                </TableRow>
              </TableHead>
              <TableBody>
                {leaveData.map((leave) => (
                  <TableRow key={leave._id}>
                    <TableCell>{leave.name}</TableCell>
                    <TableCell>{leave.email}</TableCell>
                    <TableCell>{leave.leaveType}</TableCell>
                    <TableCell>{leave.days}</TableCell>
                    <TableCell>{leave.reason}</TableCell>
                    <TableCell>{leave.status}</TableCell>
                    <TableCell>{leave.date}</TableCell>
                    


                    <TableCell>
  {<Button onClick={() => handleApproval(leave._id)}><i className="fa fa-check" aria-hidden="true"/></Button>}
</TableCell>
<TableCell>
  {<Button onClick={() => handleDisapproval(leave._id)}><i className="fa fa-close" aria-hidden="true"/></Button>}
</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Container>
    </>
  );
}
