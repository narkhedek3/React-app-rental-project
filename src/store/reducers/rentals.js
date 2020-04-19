
const rentals = (state = [], action) => {

  switch (action.type) {
    case 'FETCH_RENTALS':
      return action.rentals;
    case 'CREATE_RENTAL':
      const rentals = [...state];
      rentals.push(action.rental);
      return rentals;
    default:
      return state;
  }
  
}

export default rentals;