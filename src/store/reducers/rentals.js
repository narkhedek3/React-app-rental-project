
const rentals = (state = [], action) => {

  switch (action.type) {
    case 'FETCH_RENTALS':
      return action.rentals;
    default:
      return state;
  }
  
}

export default rentals;