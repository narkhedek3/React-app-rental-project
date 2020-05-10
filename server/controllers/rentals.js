const Rental = require('../models/rental');

exports.getRentals = (req, res) => Rental.find({}, (err, data) => {
  if (err) {
    return rental.sendError(res, { status: 422, details: 'Cannot retrieved rentals' });
  }

  return res.status(200).json(data);

});

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;
  Rental.findById(rentalId, (err, data) => {
    if (err) {
      return rental.sendError(res, { status: 422, details: 'Not able to retrieve some error occured' });
    }

    return res.status(200).json(data);
  });
}

exports.createRental = (req, res) => {
  const rentalData = req.body;

  const newRental = new Rental(rentalData);

  newRental.save((err, createdRental) => {
    if (err) {
      return rental.sendError(res, { status: 422, details: 'Not able to create rental some error occured' });
    }

    return res.status(200).json({ message: `Rental with id ${createdRental._id} is added` });
  });
};

exports.deleteRentalById = (req, res) => {
  const { rentalId } = req.params;

  Rental.remove({ _id: rentalId }, (err) => {
    if (err) {
      return rental.sendError(res, { status: 422, details: 'Not able to delete rental some error occured' });
    }
    return res.json({ message: `Rental with id ${rentalId} is deleted` });
  })



  // const index = rentals.findIndex((rental) => rentalId === rental._id);
  // if(index !== -1) {
  //   rentals.splice(index,1);
  //   return res.json({message: `Rental with id ${rentalId } is deleted`});
  // } else {
  //   return res.status(404).json({message: `Rental with id ${rentalId } not found`});
  // }
};

exports.updateRentalById = async (req, res) => {
  const rentalData = req.body;
  const { rentalId } = req.params;
  console.log(rentalData,rentalId);
  // const newValues = { $set: rentalData };
  // const query = { _id: rentalId };

  rental.set(rental);
  await rental.save();

  // rental.updateOne(query, newValues , (err, data) => {
  //   console.log(data);
  //   if (err) {
  //     return Rental.sendError(res, { status: 422, details: 'Not able to update rental some error occured' });
  //   } 
  //   return res.json({ message: `Rental with id ${rentalId} is updated` }); 
  // });

  // const index = rentals.findIndex((rental) => rentalId === rental._id);

  // if(index !== -1) {
  //   rentals[index].city = rentalData.city;
  //   return res.json({message: `Rental with id ${rentalId } is updated`});
  // } else {
  //   return res.status(404).json({message: `Rental with id ${rentalId } not found`});
  // }
};