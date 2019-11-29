import React from 'react';
import { BrowserRouter, Route,  NavLink} from 'react-router-dom';
import Content_Main from '../Content/content_Main';
import Header from '../Header/header';
import Bottom from '../Bottom/bottom';
import { createBrowserHistory } from 'history';


class NavigationBar extends React.Component {

  state = {
    DashboardRouter: 'home',
  }

  handleSubmit = () => {
    this.render();  
    this.forceUpdate();
    this.setState({ state: this.state });
  }

  render() {

    if (this.state.toDashboard === 'home') {
     
    }

    return (
      <BrowserRouter>
          <div>
            <div>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark myfont">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" exact to="/" onSelect={(selected) => {
                    const to = '/' + selected;
                    if (window.location.pathname !== to) {
                      createBrowserHistory.push(to);
                    }
                }} >React Navbar</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav">
                      <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" onClick={this.handleSubmit}>Home</NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" exact to="/dashboard" >Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink className="nav-link" exact to="/about-us" >About Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="content11111">
             
                <switch>
                <Route path="/">
                   <Route path="/" component={Header} exact />  
                   <Route path="/" component={Content_Main} exact /> 
                   <Route path="/" component={Bottom} exact />  
              </Route>

              <Route path="/input_list">
                   <Route path="/input_list" component={Header} exact />  
                   <Route path="/input_list" component={Content_Main} exact /> 
                   <Route path="/input_list" component={Bottom} exact />  
              </Route>
                </switch>

            </div>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}
export default NavigationBar;
