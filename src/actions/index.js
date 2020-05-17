// for static data from file
// import { rentalData } from 'store/data';

import axios from 'axios';


// export const fetchRentals = () => ({ type: 'FETCH_RENTALS', rentals: rentalData });


export const extractApiErrors = (resError) => {

  let errors = [{title: 'API Error', details: 'Oops..! something went wrong'}];
  
  if(resError && resError.data ) {
    errors = resError.data;
  }

  return errors;

}

export const fetchRentals = () => dispatch => {
  dispatch({ type: 'IS_FETCHING_RENTALS' });
  axios.get('http://localhost:3000/api/v1/rentals')
    .then((res) => {
      const rentals = res.data;
      return dispatch({
        type: 'FETCH_RENTALS',
        rentals
      });
    });
}

// async and await to sync data..
export const fetchRentalById = rentalId => async dispatch => {
  dispatch({ type: 'IS_FETCHING_RENTAL' });
  const res = await axios.get(`http://localhost:3000/api/v1/rentals/${rentalId}`);
  return dispatch({
    type: 'FETCH_RENTAL_BY_ID',
    rental: res.data
  });
}


// USER ACTIONS

export const registerUser = registerData => {
  return axios
    .post('api/v1/users/register', registerData)
    .catch((error) =>  {
      return Promise.reject(extractApiErrors(error.response || {}))
    });
}


export const loginUser = loginData => {
  return axios
    .post('api/v1/users/login', loginData)
    .then(res => res.data)
    .catch((error) => Promise.reject(extractApiErrors(error.response || {})));
}

export const userAuthanticated = (decodedToken) => {
  return {
    type:'USER_AUTHENTICATED',
    username: decodedToken.username || ''
  }
}