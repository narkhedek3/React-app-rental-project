

exports.provideErrorHandler = (req, res, next) => {

  res.mongoError = dbError => {
    const normalizedErrors = [];
    const errorField = 'errors';
    console.log(dbError);
    if (dbError.hasOwnProperty(errorField) && dbError.name === 'ValidationError') {
      const errors = dbError[errorField];
      for (let property in errors) {
        normalizedErrors.push({ title: property, details: errors[property].message });
      }
    } else {
      normalizedErrors.push({ title: 'DB Error', details: 'Something went wrong' });
    }

    return res.status(422).send({ errors: normalizedErrors });

  }

  next();
}
