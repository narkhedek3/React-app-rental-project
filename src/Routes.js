import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthRoute from 'components/auth/AuthRoute';
import GuestRoute from 'components/auth/GuestRoute';

import RentalHome from 'pages/RentalHome';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RentalDetails from 'pages/RentalDetails';
import Secret from 'pages/Secret';

const Routes = () => {
  return (
    <div className="container rental-app-container">
      <Switch>
        <GuestRoute path='/login'>
          <Login />
        </GuestRoute>
        <GuestRoute path='/register'>
          <Register />
        </GuestRoute>
        <AuthRoute path='/secret'>
          <Secret />
        </AuthRoute>
        <Route path='/rental/:id'>
          <RentalDetails />
        </Route>
        <Route path='/'>
          <RentalHome />
        </Route>
      </Switch>
    </div>
  );

}

export default Routes;