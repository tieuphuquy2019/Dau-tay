import auth0Consts from './auth0-variables';
import auth0 from 'auth0-js';
import history from './history';
import db from './db';

export class AuthService {
  auth0 = new auth0.WebAuth({
    domain: 'awolf.auth0.com',
    clientID: 'pkwhjAq7e3t5TVTVJK0XioH0PaeZz8P6',
    redirectUri: 'https://04rl188l0v.codesandbox.io/callback', //window.location.href + '/callback',
    audience: 'https://awolf.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log('auth success', authResult);
        db.connect(authResult.idToken);
        history.replace('/protected');
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    //history.replace('/protected');
    window.location.href = '/protected'; // full page load --> bad uix
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    console.log('logged out');
    //history.replace('/');
    window.location.href = '/' // why is it needed?!
  }

  isAuthenticated = () => {
    // Check whether the current time is past the 
    // Access Token's expiry time
    
    console.log('isauth', localStorage.getItem('expires_at'));
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}


export default new AuthService();