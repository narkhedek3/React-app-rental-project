import { combineReducers } from 'redux';

const initRentalsReducer = () => {

  const items = (state = [], action) => {

    switch (action.type) {
      case 'FETCH_RENTALS':
        return action.rentals;
      default:
        return state;
    }
    
  }

  const isFetching = (state = false, action) => {

    switch (action.type) {
      case 'IS_FETCHING_RENTALS':
        return true;
      case 'FETCH_RENTALS':
        return false; 
      default:
        return state;
    }
    
  }

  return combineReducers({
    items,
    isFetching
  });

}

export default initRentalsReducer();