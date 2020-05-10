const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { 
    type: String, 
    minlength: [4, 'minimum length is 4 characters'], 
    maxlength: [32, 'maximum length is 4 characters'],
    required: 'Username is required'
  },
  email: { 
    type: String, 
    required: 'Email is required',
    unique: true, 
    match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/]
  },
  password: { 
    type: String, 
    required: 'Password is required',
    minlength: [4, 'minimum length is 4 characters'], 
    maxlength: [32, 'maximum length is 4 characters']
  }

});

userSchema.methods.hasSamePassword = function(providedPassword) {
  return bcrypt.compareSync(providedPassword, this.password);
}

// to trigger function before saveing model
userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });

});

module.exports = mongoose.model('User', userSchema);