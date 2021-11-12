import React from 'react';
import { Redirect, Route } from 'react-router';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../../hooks/useAuth/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()

    return (
        <Route
            {...rest}
            render={({ location }) => user?.email && admin ? children :
                <Redirect
                    to={{
                        pathname: "/home",
                        state: { from: location }
                    }}

                />
            }
        >

        </Route>
    );
};

export default AdminRoute;