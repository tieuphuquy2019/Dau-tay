/* global Auth0Lock, restdb */
import React, {Component} from 'react';
import {
  Redirect
} from "react-router-dom";
// import Auth0Lock from 'auth0-lock';
// import fakeAuth from './fakeAuth';
// restdb jsapi component

import AuthService from './AuthService';
var db = null;


export class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  constructor(props) {
    super(props);

    this.$auth = AuthService;

    /*this.setState({
      idToken: this.$auth.token
    });*/
    /*this.lock.on("authenticated", (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          return;
        }
        // log in to our database using JWT token
        if (!db) {
          db = new restdb(authResult.idToken, { "logging": false, "jwt": true });
        }
        localStorage.setItem('id_token', authResult.idToken);
        
        this.setState({
          redirectToReferrer: true,
          user: {
            nickname: profile.nickname,
            avatar: profile.picture
          }
        });
        // Display user information
        //show_profile_info(profile);
        // enable api button
        //$('.btn-api').removeAttr("disabled").text("Press me, I'm authenticated!");
      });
    });*/
  }

  login = () => {
    this.$auth.login();
    /*fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });*/
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}