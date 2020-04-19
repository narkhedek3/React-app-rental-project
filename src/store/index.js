import { rentalData } from './data';

import { createStore, combineReducers } from 'redux';

// const store = {
//   rentals: () => rentalData,
//   data: [1,2,3],
//   data1: ['A','B','C']
// };

export const initStore = () => {

  const actualDataObject = {
    rentals: () => rentalData,
    data: [1, 2, 3],
    data1: ['A', 'B', 'C']
  }

  const reducers = combineReducers(actualDataObject);

  const store = createStore(reducers);
  return store;
}
