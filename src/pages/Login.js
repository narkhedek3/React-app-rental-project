import React from 'react';
import LoginForm from 'components/forms/LoginForm';
import { Redirect } from 'react-router-dom';

import { withAuth } from 'providers/authProvider';

import ApiError from 'components/forms/ApiError';

class Login extends React.Component {

  // handleInputChange = (event) => {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value });
  // }

  // handlePasswordChange = (event) => {
  //   const password = event.target.value;
  //   this.setState({password});
  // }

  // handleSubmit = (event) => {
  //   alert(JSON.stringify(this.state));
  // }

  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      errors: []
    }
  }

  loginUser = loginData => {
    this.props.auth.signIn(loginData)
    .then(_ => this.setState({ shouldRedirect: true}))
    .catch(errors => this.setState({errors}));  
  }

  render = () => {

    const { shouldRedirect, errors } = this.state;

    let message = "";

    if(this.props.location.state) {
      message  = this.props.location.state.message;
    }

    if (shouldRedirect) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Login</h1>
            { message && 
              <div className="alert alert-success">
                <p>{message}</p>
              </div>
            }
            <LoginForm onSubmit={this.loginUser} />
            <ApiError errors={errors} />
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
              <img src="/images/login_image.jpg" alt="Login an user" />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withAuth(Login);