import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../helpers/Auth';

const PrivateRouter = ({component:Component , ...rest})=>(
    <Route
        {...rest}
        render={
            props => isAuth().rol === 'user' ? (
                <Component {...props} />
            ) : (
                <Redirect 
                    to={{
                        pathname: '/SignIn',
                        state:{from:props.location}
                    }}
                />
            )
        }
    >

    </Route>
)

export default PrivateRouter;