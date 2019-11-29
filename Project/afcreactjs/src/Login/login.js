import React from "react";
import {
  BrowserRouter as Router,
   useHistory,
  useLocation
} from "react-router-dom";
import glamorous from "glamorous";
import * as glamor from "glamor";

import fakeAuth from '../Authentication/fakeAuth';
import authProvider from '../Authorization/authProvider';
import { fetchUtils, Admin, Resource } from 'react-admin';
import authService from '../Authorization/AuthService';
import User from './user';
import Loading from './loading';


const Header = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px 0px',
})
const TitleContainer = glamorous.div({
  background: 'white',
  textAlign: 'center',
  display: 'flex',
  padding: '30px 50px',
  boxShadow: 'var(--shadow)',
  borderRadius: '50px',
  '@media only screen and (max-width: 819px)': {
    order: 0,
  },
})

const Title = glamorous.h1({
  color: 'var(--green)',
  fontSize: 50,
  lineHeight: '40px',
  textTransform: 'upperase',
})

const SecondaryTitle = glamorous.span({
  color: 'var(--black)',
})

const Inspired = glamorous.small({
  transition: '0.5s',
  ':hover': {
    color: 'var(--green)',
  },
})
const SocialLogo = glamorous.img({
  width: 25,
  background: 'white',
  boxShadow: 'var(--shadow)',
  borderRadius: 20,
  padding: 15,
  marginRight: 15,
  cursor: 'pointer',
  transition: '0.5s',
  ':hover': {
    boxShadow: 'var(--shadowHover)',
  },
})
const UserBtnsContainer = glamorous.div({
  width: '25%',
  display: 'flex',
  justifyContent: 'center',
  '@media only screen and (max-width: 819px)': {
    order: 1,
    marginTop: 10,
    width: '50%',
  },
})
const UserBtn = glamorous.span({
  background: 'white',
  boxShadow: 'var(--shadow)',
  borderRadius: 15,
  padding: 15,
  marginLeft: 15,
  cursor: 'pointer',
  transition: '0.5s',
  ':hover': {
    boxShadow: 'var(--shadowHover)',
  },
})

const NewPostBtn = glamorous.span({
  background: 'var(--green)',
  boxShadow: 'var(--shadow)',
  color: 'white',
  fontSize: 40,
  borderRadius: 15,
  padding: 15,
  lineHeight: 0.5,
  transition: '0.5s',
  cursor: 'pointer',
  position: 'fixed',
  bottom: 10,
  right: 10,
  ':hover': {
    boxShadow: 'var(--shadowHover)',
  },
})

const SocialButton = glamorous.button({
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
})

const SocialMedia = () => (
  <UserBtnsContainer>
    <SocialButton>
      {/* <SocialLogo src={twitterLogo} /> */}
    </SocialButton>
    <SocialButton>
      {/* <SocialLogo src={githubLogo} /> */}
    </SocialButton>
  </UserBtnsContainer>
)

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let loginAA = () => {
   
    fakeAuth.authenticate(() => {
       history.replace(from);
      

    });
  };
 
  return (
    <User>
       {({user, error, pending, login, logout, register}) =>
              pending ? (
                <Loading />
              ) : (
          <div id="login">

            <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label htmlFor="username" className="text-info">Username:</label><br />
                      <input type="text" name="username" id="username" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-info">Password:</label><br />
                      <input type="text" name="password" id="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info"><span>Remember me</span>&nbsp;<span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                      <button onClick={loginAA}>Log in</button>
                      
                    </div>
                    <div id="register-link" className="text-right">
                      <a href="#" className="text-info">Register here</a>
                    </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
  </User>
        
  );
}

export default LoginPage;
