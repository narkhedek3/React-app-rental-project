import React from 'react';

import { useForm, ErrorMessage } from 'react-hook-form';


import { sameAs } from 'helpers/validators';
import FormError from './FormError';

const Error = ({children}) => 
  <div className="alert alert-danger">
    {children}
  </div>

const RegisterForm = ({ onSubmit }) => {

  const { register, handleSubmit, errors, getValues } = useForm();



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          ref={register({ required: "Username is required." })}
          id="username" />
        {/* {errors.username &&
          <div className="alert alert-danger">
            <div >
              Username is required.
            </div>
          </div>
        }s */}
        <ErrorMessage as={<Error />} errors={errors} name="username">
          { ({message}) => <p>{message}</p> }
        </ErrorMessage>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          ref={register({ required: "Email is required." })}
          className="form-control"
          id="email" />
        {/* {errors.email &&
          <div className="alert alert-danger">
            <div >
              Email is required.
            </div>
          </div>
        } */}
        <FormError as={<Error />} errors={errors} name="email">
          { ({message}) => <p>{message}</p>}
        </FormError>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          ref={
            register({ required: "Password is required.", minLength: { value: 4, message: "length must me more than 4"} })
          }
          className="form-control"
          id="password" />
        {/* {errors.password &&
          <div className="alert alert-danger">
            <div >
              Password with min length 8 is required.
            </div>
          </div>
        } */}
        <ErrorMessage as={<Error />} errors={errors} name="password">
          { ({message}) => <p>{message}</p>}
        </ErrorMessage>
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          ref={register({ required: true, validate: { sameAs: sameAs('password', getValues) } })}
          className="form-control"
          id="passwordConfirmation" />
          {/* {errors.confirmPassword &&
          <div className="alert alert-danger">
            <div >
              {errors.confirmPassword.type === 'required' && "Password is required."}
            </div>
            <div >
              {errors.confirmPassword.type === 'sameAs' && "Password not matched."}
            </div>
          </div>
        } */}
        <ErrorMessage as={<Error />} errors={errors} name="confirmPassword">
          { ({message}) => <p>{message}</p>}
        </ErrorMessage>
      </div>
      <button
        type="submit"
        className="btn btn-outline-primary">Submit</button>
    </form>
  );

}


export default RegisterForm;