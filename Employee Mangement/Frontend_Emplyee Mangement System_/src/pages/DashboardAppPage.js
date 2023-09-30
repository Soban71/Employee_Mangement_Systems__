import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';


export default function DashboardAppPage() {
  const theme = useTheme();

  const [totalPendingRequests, setTotalPendingRequests] = useState("0");
const [totalEmployees, setTotalEmployees] = useState(0);  

const fetchPendingLeaveRequests = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/LeaveApplication/pending');

    if (response.data && response.data.length) {
      const pendingRequests = response.data;
      const totalPendingRequests = pendingRequests.length;

      setTotalPendingRequests(totalPendingRequests);
    }
  } catch (error) {
    console.error('Error fetching pending leave requests:', error);
  }
};

useEffect(() => {
  fetchPendingLeaveRequests();
}, []);

const fetchTotalEmployees = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/employees/totalEmployees');
    console.log('API Response:', response.data); 
    setTotalEmployees(response.data.totalEmployees);  
  } catch (error) {
    console.error('Error fetching total employees:', error);
  }
};


useEffect(() => {
  fetchTotalEmployees();
}, []);

  


  return (
    <>
     

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Leaves Request" total={totalPendingRequests} icon={'clarity:application-solid'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary title="Total Employees" total={totalEmployees} color="info" icon={'clarity:employee-group-solid'} />

        </Grid>

        <Grid item xs={12} sm={6} md={3}>
  <AppWidgetSummary
    title="Profit Amount"
    total={1.4}
    subtitle={`$${(1.4 * 1e6).toLocaleString()}`}
    color="warning"
    icon={'ant-design:windows-filled'}
  />
</Grid>


          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Bug Reports" total={1} color="error" icon={'ant-design:bug-filled'} />
          </Grid>

        

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 44 },
                { label: 'Asia', value: 435 },
                { label: 'Europe', value: 230 },
                { label: 'Africa', value: 31 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

         

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

        

         
                    
        </Grid>
      </Container>
    </>
  );
}
