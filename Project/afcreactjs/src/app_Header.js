import React from 'react';
import { NavLink, Link} from 'react-router-dom';


class App_Header extends React.Component {

   render() {

    return (
      
          <div>
           
            <div>
              <nav className="navbar navbar-expand-md bg-dark navbar-dark myfont">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" exact to="/">React Navbar</NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav navbar-nav">
                      <li className="nav-item">
                        <Link  to="/" className="nav-link" exact >Home</Link>
                      </li>
                      <li className="nav-item">
                          <div class="btn-group">
                          <Link  to="/" className="nav-link myfont dropdown-toggle" exact data-toggle="dropdown">Cá nhân</Link>
                          
                            <div class="dropdown-menu">
                              <Link  to="/"  class="dropdown-item" href="#">Tất cả đề xuất của tôi</Link>
                              <Link  to="/" class="dropdown-item" href="#">Đề xuất tôi cần thao tác</Link>
                            </div>
                          </div>
                        
                      </li>
                      <li className="nav-item">
                      <div class="btn-group">
                          <Link  to="/" className="nav-link myfont dropdown-toggle" exact data-toggle="dropdown">Tất cả ĐX</Link>
                          
                            <div class="dropdown-menu">
                              
                              <Link  to="/main_view" class="dropdown-item" href="#">Theo trạng thái</Link>
                              
                            </div>
                          </div>
                        
                      </li>
                      <li className="nav-item">
                      <div class="btn-group">
                          <Link  to="/" className="nav-link myfont dropdown-toggle" exact data-toggle="dropdown">System setup</Link>
                          
                            <div class="dropdown-menu">
                              <Link class="dropdown-item" exact to="/exportexcel">Xuất tất cả Data ra Excel</Link>
                              <Link class="dropdown-item" exact to="/workflowheader">Workflow setup Header</Link>
                              <Link class="dropdown-item" exact to="/workflowitem">Workflow setup Item</Link>
                            </div>
                          </div>
                        
                      </li>
                      <li>
                        <NavLink className="nav-link" exact to="/dashboard" >Dashboard</NavLink>
                      </li>
                      <li>
                       <Link  to="/about_us" className="nav-link" exact >About Us</Link>
                       
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            
          </div>
         
          
    );
  }
}
export default App_Header;
