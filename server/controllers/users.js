const User = require('../models/user');
const jwt = require('jsonwebtoken');

const config = require('../config/dev');


exports.login = (req, res) => {
  
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(422).json([{ title: 'User Error', details: 'Missing user properties' }, err])
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      res.mongoError(err);
    }

    if (!existingUser) {
      return res.status(422).json([{ title: 'User Error', details: 'No user with provided email. Please register and Enjoy Rental-App' }])
    }

    if (existingUser.hasSamePassword(password)) {
      // Generate JWT
      const token = jwt.sign({
        sub: existingUser.id,
        username: existingUser.username
      }, config.JWT_SECRET, { expiresIn: '2h' });
      return res.json(token);
    }

    return res.status(422).json([{ title: 'User Error', details: 'Invalid password' }])

  });

}

exports.register = (req, res) => {

  const { username, email, password, confirmPassword } = req.body;

  // this will give error while inserting in DB
  // then why to check here
  // To improve performance by reducing DB calls.
  if (!password || !email) {
    return res.status(422).json([{ title: 'User Error', details: 'Missing user properties' }, err])
  }

  if (password !== confirmPassword) {
    return res.status(422).json([{ title: 'User Error', details: 'Confirmation password not matched' }, err])
  }

  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      res.mongoError(err);
    }

    if (existingUser) {
      return res.status(422).json([{ title: 'User Error', details: 'User already exists with provided email.' }, err])
    }


    const newUser = new User({ username, password, email });

    newUser.save((err, createdUser) => {
      if (err) {
        res.mongoError(err);
      }
      return res.json({ message: `User with ${createdUser.username} is registered` });
    });

  });
}



// Authentification middleware using JWT
exports.onlyAuthUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const { decodedToken, error } = parseToken(token);
    if(error) { return notAuthorized(res); }

    User.findById(decodedToken.sub, (err, foundUser) => {
      if(err) {
        res.mongoError(err);
      } 

      if(foundUser) {
        res.locals.user = foundUser;
        next();
      } else {
        return notAuthorized(res);
      }
    });


  } else {
    return notAuthorized(res);
  }
}

const notAuthorized = (res) => {
  return res
    .status(401)
    .send({
      errors: [{ title: 'Not Authorized', details: 'You need to login to get access' }]
    });
}

const parseToken = (token) => {
  try {
    const decodedToken = jwt.verify(token.split(' ')[1], config.JWT_SECRET) || null;
    return { decodedToken }
  } catch(error) {
    return { error: error.message };
  }
}