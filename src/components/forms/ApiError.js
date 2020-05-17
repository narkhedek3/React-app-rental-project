
import React from 'react';

const ApiError = ({ errors }) => {
  
  if (errors && errors.length !== 0 && errors.map)
    return errors.map((e) => {
      if (e !== null)
        return (
          <div className="alert alert-danger">
            <p key={e.title}>
              {e.details}
            </p>
          </div>
        )
      else
        return null;
    })
  
  return null;
}

export default ApiError;