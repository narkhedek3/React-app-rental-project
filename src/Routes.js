import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RentalHome from './pages/RentalHome';
import Login from './pages/Login';
import Register from './pages/Register';
import RentalDetails from './pages/RentalDetails';

const Routes = () => {
  return (
    <div className="container rental-app-container">
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
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