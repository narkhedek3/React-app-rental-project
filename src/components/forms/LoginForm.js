import React from 'react';
import { useForm } from 'react-hook-form';

import { EMAIL_PATTERN } from 'rental_constants';

const LoginForm = ({ onSubmit }) => {

  const { register, handleSubmit, errors } = useForm();


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          ref={register({ required: true, pattern: EMAIL_PATTERN})}
          name="email"
          type="email"
          className="form-control"
          id="email" />
        {errors.email &&   
        <div className="alert alert-danger">
            <div>
              { errors.email.type === 'required' && "email is required"}
            </div>
            <div>
              { errors.email.type === 'pattern' && "Must be valid email format!"}
            </div>
          </div> 
        }
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          ref={register({ required: true, minLength: 8})}
          name="password"
          type="password"
          className="form-control"
          id="password" />
          { errors.password &&
            <div className="alert alert-danger">
              Password is not valid
            </div>
          }
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary">Submit</button>
    </form>
  );
}

export default LoginForm;