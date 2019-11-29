import React, {useState} from 'react';
import { Route, Switch} from 'react-router-dom';
import FormErrors from './FormErrors';

import {Testaa} from './testaa'


class App_Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    // redirect to home if already logged in
    Testaa.login();
   
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}

handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value}, 
    () => { this.validateField(name, value) });
}
  
  componentDidMount()
  {
    Testaa.currentUserValue();

  }
  

   render() {
    
    return (
      <div>
          <form classname="demoForm">
          <h2>Sign up</h2>
          <div classname="form-group">
            <label htmlfor="email">Email address</label>
            <input type="email" classname="form-control" name="email" placeholder="Email"
value={this.state.email} onChange={this.handleUserInput} />
          </div>
          <div classname="form-group">
            <label htmlfor="password">Password</label>
            <input type="password" classname="form-control" name="password" placeholder="Password"
value={this.state.password} onChange={this.handleUserInput} />
          </div>
          <button type="submit" classname="btn btn-primary" disabled={!this.state.formValid}>
            Sign up
          </button>
        </form>
    </div>
    );
  }
}
export default App_Main;


