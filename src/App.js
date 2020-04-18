import React from 'react';
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

import { StateContext } from './state-context';
import store from './store';

function App() {
  
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

      <StateContext.Provider value={store}>
        <Router> 
          <Header />
          <Routes />
        </Router>
      </StateContext.Provider>

    </div>
  );

}

export default App;
