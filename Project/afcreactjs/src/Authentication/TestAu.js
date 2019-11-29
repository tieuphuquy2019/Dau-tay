import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import fakeAuth from './fakeAuth';
import AuthButton from './AuthButton';
import PublicPage from './PublicPage';
import ProtectedPage from './ProtectedPage';
import LoginPage from './LoginPage';
import Login from '../Login/login';
import WorkFlowHeader from '../WorkFlow/WorkFlowHeader';

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>
          <Route path="/login">
            <Login />
            <LoginPage />
          </Route>
          <PrivateRoute path="/protected">
            <WorkFlowHeader />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}




