const express = require('express');
const router = express.Router();
const { 
  getRentals,
  getRentalById,
  createRental,
  deleteRentalById,
  updateRentalById
} = require('../controllers/rentals');


// /api/v1/rentals can be removed if we use it in middleware url
// router.get('/api/v1/rentals', (req, res) => {
//   return res.json(rentals);
// });

router.get('', getRentals);

router.get('/:rentalId', getRentalById);

router.post('', createRental);

router.delete('/:rentalId', deleteRentalById);

router.patch('/:rentalId', updateRentalById);

module.exports = router;