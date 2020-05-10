
import React from 'react';

const FormError = ({ errors, name, children }) => {

  const error = errors[name] || null;

  if (!error)
    return null;

  return (
    <div className="alert alert-danger">
      {children(error)}
    </div>
  )


}

export default FormError;