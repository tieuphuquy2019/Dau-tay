import * as api from '../utils/api'
import React, { Component } from 'react';
    import Form from 'react-validation/build/form';
    import Input from 'react-validation/build/input';
    import CheckButton from 'react-validation/build/button';
    import { isEmail, isEmpty } from 'validator';
import LoginFuntion from './LoginFuntion';

    const required = (value) => {
      if (isEmpty(value)) {
          return <small className="form-text text-danger">This field is required</small>;
      }
    }

    const email = (value) => {
      if (!isEmail(value)) {
          return <small className="form-text text-danger">Invalid email format</small>;
      }
    }

    const minLength = (value) => {
      if (value.trim().length < 6) {
          return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
      }
    }




    class Login extends Component {
        
        constructor(props){
            super(props);
            this.state = {
                email : '',
                password: '',
            };
        }

        // validateForm() {
        //     this.setState({email: this.state.emailValid && this.state.passwordValid});
        //   }
       
    onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
        
      }

      

        onSubmit(e){
            e.preventDefault();
            this.form.validateAll();

            if ( this.checkBtn.context._errors.length === 0 ) {
               LoginFuntion.auth.login(this.state);
               alert('success');

            }
        }

        onVerify(e){
            e.preventDefault();
            this.form.validateAll();
          
            if ( this.checkBtn.context._errors.length === 0 ) {
                LoginFuntion.auth.getall(this.state);
            }
        }

        render() {
            return (
                <div className="container">
                    <div className="login-container">
                        <div id="output"></div>
                        <div className="avatar"></div>
                        <div className="form-box">
                            <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                <Input 
                                    name="email" 
                                    onChange={this.onChangeHandler}
                                    type="text" 
                                    placeholder="Email"
                                    className="form-control" 
                                    validations={[required, email]}
                                />
                                <Input 
                                    name="password" 
                                    onChange={this.onChangeHandler}
                                    type="password" 
                                    placeholder="Password"
                                    className="form-control" 
                                    validations={[required, minLength]}
                                />
                                <button className="btn btn-info btn-block login" type="submit" onSubmit={e => this.onSubmit(e)}>Login</button>
                                <button className="btn btn-info btn-block login" type="submit" onClick={e => this.onVerify(e)}>Verify</button>
                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                            </Form>
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default Login;