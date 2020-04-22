import rentals from './reducers/rentals';
import rental from './reducers/rental';
import { createStore, combineReducers } from 'redux';

// const store = {
//   rentals: () => rentalData,
//   data: [1,2,3],
//   data1: ['A','B','C']
// };

export const initStore = () => {

  // reducers are PURE function
  // every time same output for same input
  // No  API calls or route changses
  // No Math.random() 
  const reducers = combineReducers({
    rentals,
    rental
  });

  const reduxBrowserExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  const store = createStore(reducers, reduxBrowserExtension);
  return store;
}
