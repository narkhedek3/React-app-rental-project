const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: { type: String, required: true, maxlength: [128, "Too long title: Maximum 128 characters"] },
  city: { type: String, required: true, lowercase: true },
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  numOfRooms: { type: Number, required: true },
  shared: { type: Boolean, required: true },
  description: { type: String, required: true },
  dailyPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});


// rental model functions
rentalSchema.methods.sendError = function(res, config) {
  const { status, details } = config;
  return res
  .status(status)
  .send({errors: [{title: 'Rental Error', message: details}]});
}


module.exports = mongoose.model('Rental', rentalSchema);