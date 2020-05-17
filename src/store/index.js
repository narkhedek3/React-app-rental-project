import rentals from './reducers/rentals';
import rental from './reducers/rental';
import auth from './reducers/auth';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'; 

// const addPromiseToDispatch = (store) => {
//   const { dispatch } = store;

//   return action => {
//     if( action.then && typeof action.then === 'function') {
//       return action.then((action) => {
//         dispatch(action);
//       });
//     }

//     dispatch(action);
//   }
// }

// const addThunkToDispatch = (store) => {
//   const { dispatch } = store;
//   return action => {
//     if(typeof action === 'function') {
//       return action(dispatch);
//     }

//     dispatch(action);
//   }
// }

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
    rental,
    auth
  });

  const composeEnhancerForChromeExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose
  const store = createStore(reducers, composeEnhancerForChromeExtension(applyMiddleware(thunk)));

  // store.dispatch = addPromiseToDispatch(store);
  // store.dispatch = addThunkToDispatch(store);

  return store;

}