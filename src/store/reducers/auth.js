import { combineReducers } from 'redux';

const initAuthReducer = () => {
  
  const isAuth = (state = false, action) => {

    switch (action.type) {
      case  'USER_AUTHENTICATED':
        return true;
      case 'USER_LOGGED_OUT':
        return false;
      default:
        return state;
    }
  }

  const username = (state = '', action) => {
    switch (action.type) {
      case 'USER_AUTHENTICATED':
        return action.username;
      case 'USER_LOGGED_OUT':
        return '';
      default:
        return state;
    }
  }

  return combineReducers({
    isAuth,
    username
  });

}

export default initAuthReducer();