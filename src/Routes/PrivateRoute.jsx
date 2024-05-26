import { useAuth } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Or a spinner, etc.
    }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
