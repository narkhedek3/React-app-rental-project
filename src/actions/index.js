import { rentalData } from '../store/data';

export const fetchRentals = () => ({ type: 'FETCH_RENTALS', rentals: rentalData });

export const createRentals = rental => ({ type: 'CREATE_RENTAL', rental });