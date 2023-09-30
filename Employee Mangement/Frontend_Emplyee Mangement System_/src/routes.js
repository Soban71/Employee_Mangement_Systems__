import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import ProtectedRoute from './components/Logins/ProtectedRoute'; // Import your ProtectedRoute component
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import AddEmployee from './pages/AddEmployee';
import LoginPage from './components/Logins/Login';
import ComponentFetcher from './pages/CustomerView/AllcomponentDisplayer/ComponentFetcher';
import Application from './pages/CustomerView/Components/Application';
import LeaveRequest from './pages/LeaveRequest';
import Headers from './pages/CustomerView/Components/Header';
import MainScreen from './pages/CustomerView/Components/MainScreen';
import Features from './pages/CustomerView/Components/Features';
import Location from './pages/CustomerView/Components/Location';
import AddEvents from './pages/AddEvents';
import Events from './pages/CustomerView/Components/Events';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <SimpleLayout />, // You can use a common layout here
      children: [

        { path: '/', element: <LoginPage /> }, 
        { path: 'Login', element: <LoginPage /> },
        
        
        { path: 'Application', element: <Application /> },
        { path: 'UpcomingEvents', element: <Events /> },
        {
          path: 'Header',
          element: <ComponentFetcher />,
          children: [
            { element: <Navigate to="" />, index: true },
            { path: 'Headers', element: <Headers /> },
            { path: 'MainScreen', element: <MainScreen /> },
            { path: 'Features', element: <Features /> },
            { path: 'Location', element: <Location /> },
           
          ],
        },
        
        
        {
          path: 'dashboard',
          element: <DashboardLayout />,
          children: [
            { element: <Navigate to="app" />, index: true },
            { path: 'app', element: <DashboardAppPage /> },
            { path: 'user', element: <UserPage /> },
            { path: 'products', element: <AddEmployee /> },
            { path: 'blog', element: <BlogPage /> },
            { path: 'LeaveRequest', element: <LeaveRequest /> },
            { path: 'AddEvent', element: <AddEvents /> },
          ],
        },
        {
          path: '404',
          element: <Page404 />,
        },
        {
          path: '*',
          element: <Navigate to="/404" replace />,
        },
      ],
    },
  ]);

  return routes;
}