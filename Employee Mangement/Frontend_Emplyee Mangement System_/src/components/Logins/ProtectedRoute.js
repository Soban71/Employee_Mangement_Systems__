import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  if (!token) {
    navigate('/login'); // Redirect to the login page if the user is not authenticated
    return null;
  }

  return children; // Render the protected component if the user is authenticated
};

export default ProtectedRoute;