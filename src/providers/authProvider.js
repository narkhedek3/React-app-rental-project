
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { loginUser, userAuthanticated } from 'actions';

import jwt from 'jsonwebtoken';
import moment from 'moment';

const { createContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = (props) => {

  const checkAuthState = () => {
    const decodedToken = decodeToken(getToken());
    if (isTokenValid(decodedToken)) {
      props.dispatch(userAuthanticated(decodedToken));
    }
  }

  const isAuthenticated = () => {
    const decodedToken = decodeToken(getToken());
    return decodeToken && isTokenValid(decodedToken);
  }

  const isTokenValid = decodedToken => {
    return decodedToken && moment().isBefore(getExpirationTime(decodedToken))
  }

  const getExpirationTime = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  }

  const getToken = () => {
    return localStorage.getItem('jwt_token');
  }

  const decodeToken = token => {
    return jwt.decode(token);
  }

  const signOut = () => {
    localStorage.removeItem('jwt_token');
    props.dispatch({ type: 'USER_LOGGED_OUT' });
  }

  const signIn = (loginData) => {
    return loginUser(loginData)
      .then(token => {
        localStorage.setItem('jwt_token', token);
        const decodedToken = decodeToken(token);
        props.dispatch(userAuthanticated(decodedToken));
        return token;
      });
  }

  const authApi = {
    signIn,
    signOut,
    checkAuthState,
    isAuthenticated
  }

  return (
    <AuthContext.Provider value={authApi}>
      {props.children}
    </AuthContext.Provider>
  )

}


export const AuthProvider = connect()(AuthBaseProvider);


export const useAuth = () => {
  return useContext(AuthContext);
}


// always try to use props in High Order Component
// So that if multiple HOC are there may be chances of losing props from another HOC
// Example "connect()withAuth(LogIn);"  
// above eg using two HOC connect and withAuth
// connect is adding dispatch in auth and withAuth is adding auth
// if i dont add previous props in withAuth i am not able to use dispatch prop in LogIn
// So best practice is to provide all props of higher order component to lower order component 
export const withAuth = (Component) => {
  return function (props) {
    return (
      <AuthContext.Consumer>
        {authApi => <Component {...props} auth={authApi} />}
      </AuthContext.Consumer>
    )
  }
}
