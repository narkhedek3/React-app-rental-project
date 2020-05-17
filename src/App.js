import React, { useEffect } from 'react';
import './App.css';
import Header from './components/shared/Header';
// import RentalHome from './pages/RentalHome';
// import Login from './pages/Login';
// import Register from './pages/Register';

// import { Router, Route } from './components/custom-router';

import {
  BrowserRouter as Router
} from 'react-router-dom';
import Routes from './Routes';

// custom react redux provider
//import { StateContext } from './state-context';
// import Provider from './store/Provider';

import { Provider } from 'react-redux';

import { AuthProvider, useAuth } from 'providers/authProvider';


import { initStore } from './store';
const store = initStore();


const Providers = ({ children }) =>
  <Provider store={store}>
    <AuthProvider>
      {children}
    </AuthProvider>
  </Provider>

const RentalApp = ({ children }) => {

  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  },[authService]);

  return (<Router>
    <Header logout={authService.signOut}/>
    <Routes />
  </Router>)
}

const App = () => {

  //#region basic routing
  // const renderPages = () => {
  //   const { pathname } = window.location;

  //   switch(pathname) {
  //     case '/login':
  //       return (<Login />);
  //     case '/register':
  //       return (<Register />);
  //     case '/': 
  //       return (<RentalHome />);
  //     default:
  //       return (<RentalHome />);
  //   }
  // }
  //#endregion 

  return (
    <div className="App">

      {
        //#region   custom router code
        /*<Router>
          <Route path='/login'>
          <Login />
          </Route>
          <Route path='/register'>
          <Register />
          </Route>
          <Route path='/'>
          <RentalHome />
          </Route>
        </Router> */
        //#endregion
      }
      {/* { renderPages() } */}

      <Providers>
        <RentalApp />
      </Providers>

    </div>
  );

}

export default App;
