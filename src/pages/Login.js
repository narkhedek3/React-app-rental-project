import React from 'react';
import LoginForm from 'components/forms/LoginForm';

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  // handleInputChange = (event) => {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value });
  // }

  // handlePasswordChange = (event) => {
  //   const password = event.target.value;
  //   this.setState({password});
  // }


  handleSubmit = (event) => {
    alert(JSON.stringify(this.state));
  }

  loginUser = (loginData) => {
    alert(JSON.stringify(loginData));
  }

  render = () => {
    return (
      <div className="bwm-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Login</h1>
            {/* <!-- <div className="alert alert-success">
                  Some message
                </div> --> */}
            <LoginForm onSubmit={this.loginUser}/>

            {/* <div className="alert alert-danger">
                  <p>
                    Some Error
                  </p>
                </div> --> */}
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

export default Login;