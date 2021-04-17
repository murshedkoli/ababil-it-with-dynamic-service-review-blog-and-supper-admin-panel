import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {

    const sessionUser = JSON.parse(sessionStorage.getItem('user'))



    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                sessionUser ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;