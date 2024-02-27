import PropTypes from 'prop-types'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    // console.log("private route location", location.pathname);
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user?.emailVerified) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}